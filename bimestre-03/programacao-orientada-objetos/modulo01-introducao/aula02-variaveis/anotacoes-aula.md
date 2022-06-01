## Aula 02 - Variáveis

O laço ou estrutura de repetição for é usado para repetir determinada instrução por quantas vezes necessária. Para isso
inicializamos um contador, passamos uma condição de parada e quanto o contador irá aumentar ou subir a cada repetição do laço.

Ex:
~~~java
public class Main{
    
  public static void main(String[] args) {
    for (int i = 0; i < 5; i ++) {
      System.out.println("Volta número " + (i + 1));
    }
  }
}
~~~

### Strings
Métodos que podemos utilizar em tipos de dado "String".

Ex:
~~~java
public class Main {
    
    public static void main(String[] args) {
        String nome = "Juan";
        int quantidadeLetras = nome.length();
        char inicialNome = nome.charAt(0);

        System.out.println("Variável nome: " + nome);

        if (nome.equals("Juan")) { //.equals() verifica se a string é igual ao parâmetro passado
            System.out.println("Variável nome em letras maiúsculas: " + nome.toUpperCase());
        }

        System.out.println("Quatidade de caracteres na variável nome: " + quantidadeLetras);
        System.out.println("Letra inicial na variável nome: " + inicialNome);
    }
}
~~~

### Integer
Métodos que podemos utilizar em tipos de dado "Integer". Integer como classe e não valor primitivo (int).

Ex:
~~~Java
public class Main {
    
    public static void main(String[] args){
        Integer valor1 = 6; //Criamos e definimos uma integer dando a ela um valor inicial igual a 6
        Integer valor2 = new Integer(4); //Aqui fazemos algo similar a linha de cima, porém a parte da direita está criando e naõ atribuindo um valor
        int comparacao = valor1.compareTo(valor2);

        switch(comparacao) {
            case 1:
                System.out.println("o primeiro valor é maior");
                break;
            case -1:
                System.out.println("O segundo valor é maior");
                break;
            default:
                System.out.println("Os valores sõa iguais");
        }

        //Também podemos ver se os valores são iguais utilizando o método .equals()
        //Um integer sem atribuição de valor possuí o valor "null"
    }
}
~~~

### Float
Características de criação, definição e atribuição de dados do tipo float.

Ex:
~~~java
public class Main {
    
    public static void main(String[] args) {
        Float quociente = 0.5f; //O f sinaliza que é um número float e não double
        Float quociente2 = new Float(2.5); //Também podemos criar o float ao invés de atribuir
        int comparacao = quociente.compareTo(quociente2);

        switch(comparacao) {
            case 1:
                System.out.println("o primeiro valor é maior");
                break;
            case -1:
                System.out.println("O segundo valor é maior");
                break;
        }
        
        if (quociente.equals(quociente2)) {
            System.out.println("Os quocientes são iguais");
        }

        //Um float sem atribuição de valor também possuí o valor "null"
    }
}
~~~

Quando iniciamos uma variável escrevendo o tipo de dado com a primeira letra maiúscula (String, Integer e Float),
estamos dfinindo uma classe própria do Java, com elas podemos utilizar os métodos da linguagem, realizando
operações que não são possíveias com tipos primitivos. Cada classe em Java possuí seus próprios métodos.

### Prática integradora:
~~~java
/*
Escreva um programa Java que solicite um nome e um sobrenome separadamente, e a partir dessas variáveis
você deve obter uma terceira variável com as iniciais. Imprima o nome, o sobrenome e as iniciais no console do IntelliJ.
 */
public class Main {
    
    public static void main(String[] args) {
        String nome = "André";
        String sobrenome = "Ferreira";
        char inicialNome = nome.charAt(0);
        char inicialSobrenome = sobrenome.charAt(0);

        System.out.println("Nome: " + nome);
        System.out.println("Sobrenome: " + sobrenome);
        System.out.println("Iniciais: " + inicialNome + inicialSobrenome);
    }
}
~~~

### Scanner
Classe própria do Java utilizada para inserir valores e os ler. Como todo pacote precisa ser importado. Possuí
funções e métodos já programados para trabalhar com diferentes tipos de dados.

Ex:
~~~java
import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);

        String nome;
        String sobrenome;
        char inicialNome;
        char inicialSobrenome;
        int idade;
        float altura;

        System.out.println("Digite seu nome:");
        nome = scanner.nextLine();
        inicialNome = nome.charAt(0);
        System.out.println("Digite seu sobrenomenome:");
        sobrenome = scanner.nextLine();
        inicialSobrenome = sobrenome.charAt(0);
        System.out.println("Qual sua idade?");
        idade = scanner.nextInt();
        System.out.println("Qual sua altura?");
        altura = scanner.nextFloat();

        System.out.println("Nome: " + nome);
        System.out.println("Sobrenome: " + sobrenome);
        System.out.println("Iniciais: " + inicialNome + inicialSobrenome);
        System.out.println("Idade: " + idade);
        System.out.println("Altura: " + altura);
        
        scanner.close(); //Boa prática para evitar pendências na memória
    }
}
~~~
