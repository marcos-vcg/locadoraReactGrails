import React, {useEffect, useState} from "react";
import {useHistory}from "react-router-dom"
import InputText from "../../components/ImputText/inputText";
import {DatePikerAnt} from "../../components/ImputDate/inputDate";
import {Form, Col, Row} from "antd";
import CabecalhoForm from "../../components/CabecalhoForm/pageHeader";
import {ServiceCliente} from "../../services/cliente"
import {CLIENT_URL} from "../../config";


export default function ClienteForm (props){
    const [entityInstance, setEntityInstance] = useState([]);
    const {id}= props.match.params;
    const [form] = Form.useForm();
    const history = useHistory();


    useEffect(() => {
        getModel()
    }, [id])

    useEffect(() => {
        form.setFieldsValue({
            nome: (entityInstance || {}).nome,
            cpf: (entityInstance || {}).cpf,
            endereco: (entityInstance || {}).endereco,
            nascimento: (entityInstance || {}).nascimento,
        });
    }, [entityInstance]);



    return (
        <Col span={20}>
            <Form layout={"vertical"} form={form} onFinish={onFinish}>
                <CabecalhoForm
                    title={id ? "Editar Cliente" : "Novo Cliente"}
                    onBack={"/cliente"}
                    onClickSalvar={handleSubmit}
                />
                <br/>
                <Row gutter={24}>
                    <Col span={24}>
                        <InputText
                            name="nome"
                            label={"Nome"}
                            placeholder={"Nome"}>
                        </InputText>
                    </Col>
                </Row>
                <br/>
                <Row gutter={24}>
                    <Col span={17}>
                        <InputText
                            name="cpf"
                            label={"CPF"}
                            placeholder={"CPF"}>
                        </InputText>
                    </Col>
                    <Col span={7}>
                        <DatePikerAnt
                            name="nascimento"
                            label={"Data de Nascimento"}>
                        </DatePikerAnt>
                    </Col>
                </Row>
                <br/>
                <Row gutter={24}>
                    <Col span={24}>
                        <InputText
                            name="endereco"
                            label={"Endereço"}
                            placeholder={"Endereço"}>
                        </InputText>
                    </Col>
                </Row>
            </Form>
        </Col>
    )


    async function onFinish(values){
        console.log("values", values)
        if(id) {
            values.id = id
            await ServiceCliente.editar(values).then(() => history.push(CLIENT_URL + "/cliente"));
        } else {
            await ServiceCliente.salvar(values).then(() => history.push(CLIENT_URL + "/cliente"));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        form.submit()
    }


    async function getModel ()  {
        let response
        if(id) {
            response = await ServiceCliente.prepararEditar(id)
        } else {
            response = await ServiceCliente.prepararNovo()
        }
        setEntityInstance(response.data.entityInstance)
    }

}