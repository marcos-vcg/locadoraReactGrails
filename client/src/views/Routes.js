import React from "react"
import {Switch, Route} from "react-router-dom"
import {CLIENT_URL} from "../config";

import ClienteForm from "./cliente/form"
import ClienteList from "./cliente/list"
import FilmeList from "./filme/list";
import FilmeForm from "./filme/form";
import GeneroForm from "./genero/form";
import GeneroList from "./genero/list";
import CategoriaList from "./categoria/list";
import CategoriaForm from "./categoria/form";
import LocacaoList from "./locacao/list";
import LocacaoForm from "./locacao/form";



export default function Routes() {
    return (
        <Switch>
            {/* Pagina Inicial
            <Route exact path={"/"} component={}/>
            */}

            {/* Cliente */}
            <Route
                exact
                path={CLIENT_URL + "/cliente"}
                component={ClienteList}
            />
            <Route
                exact
                path={CLIENT_URL + "/cliente/form"}
                component={ClienteForm}
            />
            <Route
                path={CLIENT_URL + "/cliente/form/:id"}
                component={ClienteForm}
            />
            {/* Filme */}
            <Route
                exact
                path={CLIENT_URL + "/filme"}
                component={FilmeList}
            />
            <Route
                exact
                path={CLIENT_URL + "/filme/form"}
                component={FilmeForm}
            />
            <Route
                path={CLIENT_URL + "/filme/form/:id"}
                component={FilmeForm}
            />
            {/* Gênero */}
            <Route
                exact
                path={CLIENT_URL + "/genero"}
                component={GeneroList}
            />
            <Route
                exact
                path={CLIENT_URL + "/genero/form"}
                component={GeneroForm}
            />
            <Route
                path={CLIENT_URL + "/genero/form/:id"}
                component={GeneroForm}
            />
            {/* Categoria */}
            <Route
                exact
                path={CLIENT_URL + "/categoria"}
                component={CategoriaList}
            />
            <Route
                exact
                path={CLIENT_URL + "/categoria/form"}
                component={CategoriaForm}
            />
            <Route
                path={CLIENT_URL + "/categoria/form/:id"}
                component={CategoriaForm}
            />
            {/* Locação */}
            <Route
                exact
                path={CLIENT_URL + "/locacao"}
                component={LocacaoList}
            />
            <Route
                exact
                path={CLIENT_URL + "/locacao/form"}
                component={LocacaoForm}
            />
            <Route
                path={CLIENT_URL + "/locacao/form/:id"}
                component={LocacaoForm}
            />

            {/* ... render={props => <ClienteForm {...props} />} ... */}
        </Switch>
    )
}