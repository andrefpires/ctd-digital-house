package entities;

public class Atleta {
    private String nome;
    private String sobrenome;
    private int idade;
    private Endereco endereco;
    private String descricao;

    public Atleta(String nome, String sobrenome, int idade, Endereco endereco, String descricao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.endereco = endereco;
        this.descricao = descricao;
    }
}
