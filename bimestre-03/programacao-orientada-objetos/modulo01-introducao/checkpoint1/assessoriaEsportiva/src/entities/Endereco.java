package entities;

public class Endereco {
    private String pais;
    private String cidade;
    private String estado;
    private String bairro;
    private String rua;
    private int numero;

    public Endereco(String pais, String estado, String cidade, String bairro, String rua, int numero) {
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.rua = rua;
        this.numero = numero;
    }
}