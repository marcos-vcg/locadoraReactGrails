import React, {useState} from 'react';
import {BrowserRouter, Router, Link, useHistory} from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import "./css/App.css";
import Routes from "./views/Routes";
import {CLIENT_URL} from "./config";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App (){
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(false);


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to={"/locacao"} >Locação</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Cadastros">
                        <Menu.Item key="3" to={"/cliente"}>
                            <Link to={"/cliente"} >Cliente</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={"/filme"} >Filme</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to={"/genero"} >Gênero</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to={"/categoria"} >Categoria</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Configurações">
                        <Menu.Item key="7">Usuários</Menu.Item>
                        <Menu.Item key="8">Relatórios</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Usuário</Breadcrumb.Item>
                        <Breadcrumb.Item>Marcos</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                        <Routes/>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by Marcos Costa ©2021</Footer>
            </Layout>
        </Layout>
    )
}

export default App;
