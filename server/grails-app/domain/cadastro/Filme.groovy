package cadastro

class Filme {
    String nome
    Genero genero
    Categoria categoria



    static constraints = {
        nome nullable: false, unique: false
        genero nullable: false
        categoria nullable: false
    }

    static mapping = {


    }
}