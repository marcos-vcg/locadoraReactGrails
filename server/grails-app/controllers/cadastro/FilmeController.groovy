package cadastro

import grails.gorm.transactions.Transactional
import grails.rest.*
import grails.converters.*

class FilmeController {

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    CrudService crudService


    Object index() {
        println("Controller Listar")
        ArrayList<Filme> entities = Filme.findAll()
        def model = [:]
        model.put("entities", entities)
        respond model
    }

    def prepareNew() {
        println("Controller Preparar Novo")
        def entityInstance = new Filme()
        ArrayList<Genero> generoList = Genero.findAll()
        ArrayList<Categoria> categoriaList = Categoria.findAll()

        //def model = [entityInstance: Filme.newInstance(params)]
        def model = [:]
        model.put("entityInstance", entityInstance)
        model.put("generoList", generoList)
        model.put("categoriaList", categoriaList)
        println(model)
        respond model
    }

    def prepareEdit() {
        println("Controller Preparar Editar")
        def entityInstance = Filme.get(params.id)
        ArrayList<Genero> generoList = Genero.findAll()
        ArrayList<Categoria> categoriaList = Categoria.findAll()

        if(entityInstance) {
            def model = [:]
            model.put("entityInstance" , entityInstance)
            model.put("generoList", generoList)
            model.put("categoriaList", categoriaList)
            println(model)
            respond model
        }
    }

    @Transactional
    def save() {
        println("Controller Salvar")
        params.putAll(getParametros())
        def instance

        if(params.id){
            instance = Filme.get(params.id)
        }else{
            instance = new Filme()
        }

        println(params.categoria)
        instance.nome = params.nome
        instance.genero = Genero.get(params.genero)
        instance.categoria = Categoria.get(params.categoria)

        crudService.salvar(instance)
    }

    @Transactional
    def update() {
        println("Controller Update")

        save()
    }

    @Transactional
    def delete() {
        println("Controller Excluir")
        def instance = Filme.get(params.id)
        crudService.excluir(instance)
    }


    Map getParametros() {
        def parameters = JSON.parse(request.getReader()) as Map
        return parameters
    }
}
