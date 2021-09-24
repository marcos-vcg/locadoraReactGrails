import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import {Form, Col, Row, Spin, Button, Upload, Table, Space, PageHeader, Popconfirm} from "antd";
import {ServiceCliente} from "../../services/cliente"
import TabelaAnt from "../../components/TabelaAnt/TabelaAnt";
import {CLIENT_URL} from "../../config";
import {Link} from "react-router-dom";



export default function ClienteList (){
    const [entities, setEntities] = useState([]);
    const history = useHistory();


    useEffect(() => {
        carregaLista();
    }, []);



    const columns = [
        {
            title: 'Nome',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'CPF',
            dataIndex: 'cpf',
            key: 'cpf',
        },
        {
            title: 'Endereco',
            dataIndex: 'endereco',
            key: 'endereco',
        },
        {
            title: 'Ações',
            key: 'acao',
            render: (text, record) => (
                <Space size="middle">
                    <Button>
                        <Popconfirm
                            title={"Deseja mesmo excluir?"}
                            onConfirm={() => {deletar(record.id)}}
                        >
                            Deletar
                        </Popconfirm>
                    </Button>
                    <Button>
                        <Link to={prepararEditar(record.id)}>Editar</Link>
                    </Button>
                </Space>
            ),
        },
    ];




    return (
        <Col span={20}>
            <PageHeader
                title={"Lista de Clientes"}
                extra={[
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => history.push(CLIENT_URL + "/cliente/form")}
                    >
                        Novo Cliente
                    </Button>
                ]}
            />
            <TabelaAnt
                className={"tabela"}
                columns={columns}
                dataSource={entities.length ? entities : []}
            />
        </Col>
    )



    async function carregaLista() {
        let response = await ServiceCliente.getTodos()
        setEntities(response.data.entities)
    }

    async function deletar (id){
        await ServiceCliente.deletar(id).then(() => carregaLista())
    }

    function prepararEditar (id) {
        return CLIENT_URL + "/cliente/form/" + id
    }
}