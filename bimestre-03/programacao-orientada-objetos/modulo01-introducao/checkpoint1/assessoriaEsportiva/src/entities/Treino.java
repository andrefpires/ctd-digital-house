package entities;

public class Treino {
    private String tipo;
    private int frequenciaSemanal;
    private int duracao;
    private String intencidade;

    public Treino(String tipo, int frequenciaSemanal, int duracao, String intencidade) {
        this.tipo = tipo;
        this.frequenciaSemanal = frequenciaSemanal;
        this.duracao = duracao;
        this.intencidade = intencidade;
    }
}
