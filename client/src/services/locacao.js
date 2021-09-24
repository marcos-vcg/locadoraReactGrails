import api from "./api"

export const ServiceLocacao = {
    getTodos: () => {
        return api.get("/locacao")
    },

    prepararNovo: () => {
        return api.get( "/locacao/prepareNew");
    },

    prepararEditar: id => {
        return api.get(`/locacao/prepareEdit`, {
            params: { id }
        })
    },

    salvar: ( entity ) => {
        return api.post( `/locacao`, {
            ...entity
        })
    },

    deletar: id => {
        return api.delete( `/locacao/${id}`);
    },

    editar: ( entity ) => {
        return api.put(`/locacao/${entity.id}`, {
            ...entity
        })
    }

};
