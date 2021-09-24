import React, {useEffect, useState} from "react";
import {useHistory}from "react-router-dom"
import InputText from "../../components/ImputText/inputText";
import {DatePikerAnt} from "../../components/ImputDate/inputDate";
import Select from "../../components/SelectAnt/select";
import {Form, Col, Row} from "antd";
import CabecalhoForm from "../../components/CabecalhoForm/pageHeader";
import {ServiceLocacao} from "../../services/locacao"
import {CLIENT_URL} from "../../config";
import LocacaoList from "./list";


export default function LocacaoForm (props){
    const [entityInstance, setEntityInstance] = useState([]);
    const[generoList, setGeneroList] = useState([])
    const[categoriaList, setCategoriaList] = useState([])
    const {id}= props.match.params;
    const [form] = Form.useForm();
    const history = useHistory();


    useEffect(() => {
        getModel()
    }, [id])

    useEffect(() => {
        form.setFieldsValue({
            nome: (entityInstance || {}).nome,
            genero: (entityInstance || {}).genero,
            categoria: (entityInstance || {}).categoria,
        });
    }, [entityInstance]);



    return (
        <Col span={20}>
            <Form layout={"vertical"} form={form} onFinish={onFinish}>
                <CabecalhoForm
                    title={id ? "Editar Locação" : "Nova Locação"}
                    onBack={"/locacao"}
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
                    <Col span={8}>
                        <Select
                            name="genero"
                            label={"Genero"}
                            placeholder={"Genero"}
                            list={generoList}
                        >
                        </Select>
                    </Col>
                    <Col span={8}>
                        <Select
                            name="categoria"
                            label={"Categoria"}
                            placeholder={"Categoria"}
                            list={categoriaList}
                        >
                        </Select>
                    </Col>
                    <Col span={7}>
                        <DatePikerAnt
                            name="lancamento"
                            label={"Data de Lancamento"}>
                        </DatePikerAnt>
                    </Col>
                </Row>
            </Form>
        </Col>
    )


    async function onFinish(values){
        console.log("values", values)
        if(id) {
            values.id = id
            await ServiceLocacao.editar(values).then(() => history.push(CLIENT_URL + "/locacao"));
        } else {
            await ServiceLocacao.salvar(values).then(() => history.push(CLIENT_URL + "/locacao"));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        form.submit()
    }


    async function getModel ()  {
        let response
        if(id) {
            response = await ServiceLocacao.prepararEditar(id)
        } else {
            response = await ServiceLocacao.prepararNovo()
        }
        console.log("response" ,response)
        console.log("generoList" ,response.data.generoList)
        setGeneroList(response.data.generoList)
        setCategoriaList(response.data.categoriaList)
        setEntityInstance(response.data.entityInstance)
    }

}