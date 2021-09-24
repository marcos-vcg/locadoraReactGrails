import api from "./api"

export const ServiceCliente = {
    getTodos: () => {
        return api.get("/cliente")
    },

    prepararNovo: () => {
        return api.get( "/cliente/prepareNew");
    },

    prepararEditar: id => {
        return api.get(`/cliente/prepareEdit`, {
            params: { id }
        })
    },

    salvar: ( entity ) => {
        return api.post( `/cliente`, {
            ...entity
        })
    },

    deletar: id => {
        return api.delete( `/cliente/${id}`);
    },

    editar: ( entity ) => {
        return api.put(`/cliente/${entity.id}`, {
            ...entity
        })
    }

};
