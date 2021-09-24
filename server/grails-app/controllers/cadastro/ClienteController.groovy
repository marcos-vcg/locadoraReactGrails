package cadastro

import grails.converters.JSON
import grails.gorm.transactions.Transactional

class ClienteController {
    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    CrudService crudService


    Object index() {
        println("Controller Listar")
        ArrayList<Cliente> entities = Cliente.findAll()
        def model = [:]
        model.put("entities", entities)
        respond model
    }

    def prepareNew() {
        def model = [entityInstance: Cliente.newInstance(params)]
        respond model
    }

    def prepareEdit() {
        println("Controller Preparar Editar")
        //def entityInstance = Cliente.findById(params.id)
        def entityInstance = Cliente.get(params.id)

        if(entityInstance) {
            def model = [:]
            model.put("entityInstance" , entityInstance)
            //respond (view: "/cliente/prepareEdit", model:[entityInstance: entityInstance])
            respond model
        }
    }

    @Transactional
    def save() {
        println("Controller Salvar")
        params.putAll(getParametros())
        def instance

        if(params.id){
            instance = Cliente.get(params.id)
        }else{
            instance = new Cliente()
        }

        instance.nome = params.nome
        instance.cpf = params.cpf
        instance.endereco = params.endereco
        println(params.nascimento)
        instance.nascimento = params.nascimento

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
        def instance = Cliente.get(params.id)
        crudService.excluir(instance)
    }


    Map getParametros() {
        def parameters = JSON.parse(request.getReader()) as Map
        return parameters
    }

}