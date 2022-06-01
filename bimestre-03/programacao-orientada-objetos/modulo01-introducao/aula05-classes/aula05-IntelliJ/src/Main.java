import entities.Artigo;

public class Main {
    public static void main(String[] args) {
        Artigo artigo1 = new Artigo("Artigo 1", true, 1100.00);

        if (artigo1.getEstoque()) {
            System.out.println("Tem estoque");
        } else {
            System.out.println("Não tem estoque");
        }

        System.out.println("O preço do produto é: " + artigo1.getPreco());
    }
}
