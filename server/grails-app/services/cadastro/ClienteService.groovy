package cadastro

import grails.gorm.services.Service

@Service(Cliente)
interface ClienteService {

    Cliente get(Serializable id)

    List<Cliente> list(Map args)

    Long count()

    Cliente delete(Serializable id)

    Cliente save(Cliente cliente)

}
