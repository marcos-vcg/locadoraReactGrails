import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import {Form, Col, Row, Spin, Button, Upload, Table, Space, PageHeader, Popconfirm} from "antd";
import TabelaAnt from "../../components/TabelaAnt/TabelaAnt";
import {CLIENT_URL} from "../../config";
import {Link} from "react-router-dom";
import {ServiceCategoria} from "../../services/categoria";



export default function CategoriaList (){
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
            title: 'Preco',
            dataIndex: 'preco',
            key: 'preco',
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
                title={"Lista de Categorias"}
                extra={[
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => history.push(CLIENT_URL + "/categoria/form")}
                    >
                        Nova Categoria
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
        let response = await ServiceCategoria.getTodos()
        setEntities(response.data.entities)
    }

    async function deletar (id){
        await ServiceCategoria.deletar(id).then(() => carregaLista())
    }

    function prepararEditar (id) {
        return CLIENT_URL + "/categoria/form/" + id
    }
}