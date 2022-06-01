package entities;

public class Desempenho {
    private int maiorDistancia;
    private int tempo;
    private int velocidadeMedia;
    private boolean problemaSaude;

    public Desempenho(int maiorDistancia, int tempo, int velocidadeMedia, int enderecoId, boolean problemaSaude) {
        this.maiorDistancia = maiorDistancia;
        this.tempo = tempo;
        this.velocidadeMedia = velocidadeMedia;
        this.problemaSaude = problemaSaude;
    }
}
