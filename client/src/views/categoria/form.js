import React, {useEffect, useState} from "react";
import {useHistory}from "react-router-dom"
import InputText from "../../components/ImputText/inputText";
import {DatePikerAnt} from "../../components/ImputDate/inputDate";
import {Form, Col, Row} from "antd";
import CabecalhoForm from "../../components/CabecalhoForm/pageHeader";
import {ServiceCategoria} from "../../services/categoria"
import {CLIENT_URL} from "../../config";


export default function CategoriaForm (props){
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
            preco: (entityInstance || {}).preco,
        });
    }, [entityInstance]);



    return (
        <Col span={20}>
            <Form layout={"vertical"} form={form} onFinish={onFinish}>
                <CabecalhoForm
                    title={id ? "Editar Categoria" : "Nova Categoria"}
                    onBack={"/categoria"}
                    onClickSalvar={handleSubmit}
                />
                <br/>
                <Row gutter={24}>
                    <Col span={12}>
                        <InputText
                            name="nome"
                            label={"Nome"}
                            placeholder={"Nome"}>
                        </InputText>
                    </Col>
                    <Col span={12}>
                        <InputText
                            name="preco"
                            label={"Preco"}
                            placeholder={"Preco"}>
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
            await ServiceCategoria.editar(values).then(() => history.push(CLIENT_URL + "/categoria"));
        } else {
            await ServiceCategoria.salvar(values).then(() => history.push(CLIENT_URL + "/categoria"));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        form.submit()
    }


    async function getModel ()  {
        let response
        if(id) {
            response = await ServiceCategoria.prepararEditar(id)
        } else {
            response = await ServiceCategoria.prepararNovo()
        }
        setEntityInstance(response.data.entityInstance)
    }

}