package cadastro

class Categoria {

    String nome
    String preco

    static hasMany = [filmes: Filme]


    static constraints = {
        nome nullable: false, blank: false, unique: true
        preco nullable: false, blank: false
    }

    static mapping = {

    }
}
