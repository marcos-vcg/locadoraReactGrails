package cadastro

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class ClienteServiceSpec extends Specification {

    ClienteService clienteService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Cliente(...).save(flush: true, failOnError: true)
        //new Cliente(...).save(flush: true, failOnError: true)
        //Cliente cliente = new Cliente(...).save(flush: true, failOnError: true)
        //new Cliente(...).save(flush: true, failOnError: true)
        //new Cliente(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //cliente.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        clienteService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Cliente> clienteList = clienteService.list(max: 2, offset: 2)

        then:
        clienteList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        clienteService.count() == 5
    }

    void "test delete"() {
        Long clienteId = setupData()

        expect:
        clienteService.count() == 5

        when:
        clienteService.delete(clienteId)
        datastore.currentSession.flush()

        then:
        clienteService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Cliente cliente = new Cliente()
        clienteService.save(cliente)

        then:
        cliente.id != null
    }
}
