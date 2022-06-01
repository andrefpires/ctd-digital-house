package entities;

public class Artigo {
    //Definimos os atributos como privados para preservar o encapsulamento
    private String descricao;
    private double precoVenda;
    private boolean estoque;

    //Função construtora
    public Artigo(String descricao, boolean estoque, double precoVenda) {
        this.descricao = descricao;
        this.precoVenda = precoVenda;
        this.estoque = estoque;
    }

    public boolean getEstoque() { //getter
        return estoque;
    }

    public double getPreco() { //getter
        return precoVenda;
    }

    public void setEstoque(boolean estoque) { //setter
        this.estoque = estoque;
    }

    public void setPreco(double preco) { //setter
        this.precoVenda = preco;
    }
}