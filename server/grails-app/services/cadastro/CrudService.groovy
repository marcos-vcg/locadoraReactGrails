package cadastro

import grails.gorm.transactions.Transactional
import org.springframework.dao.DataIntegrityViolationException

@Transactional
class CrudService {

    boolean salvar(def instance){
        instance.save(flush: true, failOnError: true)
    }

    boolean excluir(def instance) {
        Boolean registroExcluido = true

        try {
            instance.refresh()
            instance.delete(flush: true)
        } catch (DataIntegrityViolationException e) {
            registroExcluido = false
        }
        return registroExcluido
    }
}