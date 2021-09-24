package cadastro

import grails.gorm.transactions.Transactional
import grails.rest.*
import grails.converters.*

class CategoriaController {
    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    CrudService crudService


    Object index() {
        println("Controller Listar")
        ArrayList<Categoria> entities = Categoria.findAll()
        def model = [:]
        model.put("entities", entities)
        respond model
    }

    def prepareNew() {
        def model = [entityInstance: Categoria.newInstance(params)]
        respond model
    }

    def prepareEdit() {
        println("Controller Preparar Editar")
        //def entityInstance = Categoria.findById(params.id)
        def entityInstance = Categoria.get(params.id)

        if(entityInstance) {
            def model = [:]
            model.put("entityInstance" , entityInstance)
            //respond (view: "/categoria/prepareEdit", model:[entityInstance: entityInstance])
            respond model
        }
    }

    @Transactional
    def save() {
        println("Controller Salvar")
        params.putAll(getParametros())
        def instance

        if(params.id){
            instance = Categoria.get(params.id)
        }else{
            instance = new Categoria()
        }

        instance.nome = params.nome
        instance.preco = params.preco
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
        def instance = Categoria.get(params.id)
        crudService.excluir(instance)
    }


    Map getParametros() {
        def parameters = JSON.parse(request.getReader()) as Map
        return parameters
    }

}
