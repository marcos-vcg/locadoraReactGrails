package cadastro

import grails.gorm.transactions.Transactional
import grails.rest.*
import grails.converters.*

class GeneroController {
    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    CrudService crudService


    Object index() {
        println("Controller Listar")
        ArrayList<Genero> entities = Genero.findAll()
        def model = [:]
        model.put("entities", entities)
        respond model
    }

    def prepareNew() {
        def model = [entityInstance: Genero.newInstance(params)]
        respond model
    }

    def prepareEdit() {
        println("Controller Preparar Editar")
        //def entityInstance = Genero.findById(params.id)
        def entityInstance = Genero.get(params.id)

        if(entityInstance) {
            def model = [:]
            model.put("entityInstance" , entityInstance)
            //respond (view: "/genero/prepareEdit", model:[entityInstance: entityInstance])
            respond model
        }
    }

    @Transactional
    def save() {
        println("Controller Salvar")
        params.putAll(getParametros())
        def instance

        if(params.id){
            instance = Genero.get(params.id)
        }else{
            instance = new Genero()
        }

        instance.nome = params.nome
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
        def instance = Genero.get(params.id)
        crudService.excluir(instance)
    }


    Map getParametros() {
        def parameters = JSON.parse(request.getReader()) as Map
        return parameters
    }

}
