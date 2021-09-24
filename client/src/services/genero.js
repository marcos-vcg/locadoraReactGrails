import api from "./api"

export const ServiceGenero = {
    getTodos: () => {
        return api.get("/genero")
    },

    prepararNovo: () => {
        return api.get( "/genero/prepareNew");
    },

    prepararEditar: id => {
        return api.get(`/genero/prepareEdit`, {
            params: { id }
        })
    },

    salvar: ( entity ) => {
        return api.post( `/genero`, {
            ...entity
        })
    },

    deletar: id => {
        return api.delete( `/genero/${id}`);
    },

    editar: ( entity ) => {
        return api.put(`/genero/${entity.id}`, {
            ...entity
        })
    }

};
