package cadastro

import grails.gorm.transactions.Transactional
import grails.rest.*
import grails.converters.*
import grails.validation.ValidationException

import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK

class CliController {

    ClienteService clienteService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]




    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond clienteService.list(params), model:[clienteCount: clienteService.count()]
    }

    def show(Long id) {
        respond clienteService.get(id)
    }

    @Transactional
    def save(Cliente cliente) {
        if (cliente == null) {
            render status: NOT_FOUND
            return
        }
        if (cliente.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond cliente.errors
            return
        }

        try {
            clienteService.save(cliente)
        } catch (ValidationException e) {
            respond cliente.errors
            return
        }

        respond cliente, [status: CREATED, view:"index"]
    }

    @Transactional
    def update(Cliente cliente) {
        if (cliente == null) {
            render status: NOT_FOUND
            return
        }
        if (cliente.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond cliente.errors
            return
        }

        try {
            clienteService.save(cliente)
        } catch (ValidationException e) {
            respond cliente.errors
            return
        }

        respond cliente, [status: OK, view:"index"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || clienteService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
