import React, {useEffect, useState} from "react";
import {useHistory}from "react-router-dom"
import InputText from "../../components/ImputText/inputText";
import {DatePikerAnt} from "../../components/ImputDate/inputDate";
import {Form, Col, Row} from "antd";
import CabecalhoForm from "../../components/CabecalhoForm/pageHeader";
import {ServiceGenero} from "../../services/genero"
import {CLIENT_URL} from "../../config";


export default function GeneroForm (props){
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
        });
    }, [entityInstance]);



    return (
        <Col span={20}>
            <Form layout={"vertical"} form={form} onFinish={onFinish}>
                <CabecalhoForm
                    title={id ? "Editar Genero" : "Novo Genero"}
                    onBack={"/genero"}
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
            </Form>
        </Col>
    )


    async function onFinish(values){
        console.log("values", values)
        if(id) {
            values.id = id
            await ServiceGenero.editar(values).then(() => history.push(CLIENT_URL + "/genero"));
        } else {
            await ServiceGenero.salvar(values).then(() => history.push(CLIENT_URL + "/genero"));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        form.submit()
    }


    async function getModel ()  {
        let response
        if(id) {
            response = await ServiceGenero.prepararEditar(id)
        } else {
            response = await ServiceGenero.prepararNovo()
        }
        setEntityInstance(response.data.entityInstance)
    }

}