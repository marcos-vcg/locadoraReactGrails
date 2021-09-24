import api from "./api"

export const ServiceCategoria = {
    getTodos: () => {
        return api.get("/categoria")
    },

    prepararNovo: () => {
        return api.get( "/categoria/prepareNew");
    },

    prepararEditar: id => {
        return api.get(`/categoria/prepareEdit`, {
            params: { id }
        })
    },

    salvar: ( entity ) => {
        return api.post( `/categoria`, {
            ...entity
        })
    },

    deletar: id => {
        return api.delete( `/categoria/${id}`);
    },

    editar: ( entity ) => {
        return api.put(`/categoria/${entity.id}`, {
            ...entity
        })
    }

};
