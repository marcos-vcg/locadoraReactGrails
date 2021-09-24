package cadastro

class Genero {
    String nome

    static hasMany = [filmes: Filme]

    static constraints = {
        nome nullable: false, blank: false, unique: true
    }

    static mapping = {

    }
}