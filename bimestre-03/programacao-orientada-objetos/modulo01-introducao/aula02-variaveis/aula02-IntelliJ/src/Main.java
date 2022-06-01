public class Main {

    public static void main(String[] args) {
        int valor1 = 10;
        int valor2 = 2;
        int resultado = valor1 % valor2;
        String mensagem = "A divisão não resulta em um número inteiro!";

        if (resultado == 0) {
            mensagem = "A divisão resulta em um número inteiro!";
        }

        System.out.println(mensagem);
    }
}