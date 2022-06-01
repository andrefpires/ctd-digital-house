import entities.Atleta;
import entities.Endereco;

public class Main {
    public static void main(String[] args) {
        Atleta kipchoge = (
                new Atleta(
                        "Eliud",
                        "Kipchoge",
                        43,
                        new Endereco(
                                "Brasil",
                                "SP",
                                "Mogi Mirim",
                                "Jardim Morumbi",
                                "Lourdes Ascunção",
                                458
                        ),
                        "Atleta já terminou 3 meias maratonas e agora quer fazer sua primeira maratona.")
        );

        System.out.println(kipchoge);
    }
}
