package cadastro

class Cliente {
    String nome
    String cpf
    String endereco
    Date nascimento

    static constraints = {
        nome nullable: false
        cpf nullable: false, unique: false
        endereco nullable: true
        nascimento nullable: true
    }
}