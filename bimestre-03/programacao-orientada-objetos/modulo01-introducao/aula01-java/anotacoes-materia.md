## Aula 01 - Java (anotações)

<table border="1">
    <tr>
        <th>Tipos de dados primitivos</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>byte</td>
        <td>Inteiros entre -128 e 127</td>
    </tr>
    <tr>
        <td>short</td>
        <td>Inteiros entre -32768 e 32767</td>
    </tr>
    <tr>
        <td>int</td>
        <td>Inteiros entre -2147483648 e 2147483647</td>
    </tr>
    <tr>
        <td>long</td>
        <td>Inteiros muito grandes, entre -9223372036854775808 e 9223372036854775807</td>
    </tr>
    <tr>
        <td>float</td>
        <td>Números com vírgula, entre -3,402823e38 e 3,402823e38</td>
    </tr>
    <tr>
        <td>double</td>
        <td>Números com vírgula, maior capacidade, entre -1,79769313486232e308 e 1,79769313486232e308</td>
    </tr>
    <tr>
        <td>String</td>
        <td>adeia de caracteres</td>
    </tr>
    <tr>
        <td>char</td>
        <td>Apemas um caracter, unicode. </td>
    </tr>
    <tr>
        <td>boolean</td>
        <td>Verdadeiro ou falso (true/false)</td>
    </tr>
</table>
<br>
<table border="1">
    <tr>
        <th>Operadores matemáticos</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>Soma</td>
        <td>+</td>
    </tr>
    <tr>
        <td>Subtração</td>
        <td>-</td>
    </tr>
    <tr>
        <td>Divisão</td>
        <td>/</td>
    </tr>
    <tr>
        <td>Multiplicação</td>
        <td>*</td>
    </tr>
    <tr>
        <td>Módulo</td>
        <td>% (Retorna o resto de uma divisão inteira)</td>
    </tr>
    <tr>
        <td>Operador unário soma</td>
        <td>++ (Soma um)</td>
    </tr>
    <tr>
        <td>Operador unário subtração</td>
        <td>-- (Subtrai um)</td>
    </tr>
</table>
<br>
<table border="1">
    <tr>
        <th>Operadores lógicos</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>AND</td>
        <td>&& (Retorna true se todas avaliações forem verdadeiras)</td>
    </tr>
    <tr>
        <td>OR</td>
        <td>&& (Retorna true se uma das avaliações forem verdadeiras)</td>
    </tr>
    <tr>
        <td>NOT</td>
        <td>! (Retorna o oposto do resultado da avaliação)</td>
    </tr>
    <tr>
        <td>Maior que</td>
        <td>></td>
    </tr>
    <tr>
        <td>Menor que</td>
        <td><</td>
    </tr>
    <tr>
        <td>Igual</td>
        <td>== ou .equals()</td>
    </tr>
    <tr>
        <td>Maior ou igual</td>
        <td>>=</td>
    </tr>
    <tr>
        <td>Menor ou igual</td>
        <td><=</td>
    </tr>
    <tr>
        <td>Difrente</td>
        <td>!=</td>
    </tr>
</table>
<br>
<table border="1">
    <tr>
        <th>Estruturas de decisão</th>
    </tr>
    <tr>
        <td>
            if (condição) {
              //Código que é executado se a condição for verdadeira
            } else if (condição) {
              //Código que é executado se a primeira condição não for verdadeira e a segunda é verdadeira
            } else {
              //Código que é executado se nenhuma condição for verdadeira
            }
        </td>
    </tr>
    <tr>
        <td>
          switch (variavel) {
            case valor1:
              //Código que é executador se a variável tiver valor1
            break;
            case valor2:
              //Código que é executador se a variável tiver valor2
            break;
            default:
              //Código que é executador se a variável tiver algum valor não listado
          }
        </td>
    </tr>
</table>
<br>
<table border="1">
    <tr>
        <th>Estruturas de repetição</th>
        <th>Descrição</th>
    </tr>
    <tr>
      <td>
        for
      </td>
      <td>
        for (integer i = 0; i < valorMaximo; i ++) {
          //Código que é executado toda vez que a condição é satisfeita
        }
      </td>
    </tr>
    <tr>
      <td>
        for each
      </td>
      <td>
        for (Object object : listaDeObjetos) {
          //Código que será executado a cada objeto na lista
        }
      </td>
    </tr>
    <tr>
      <td>
        while
      </td>
      <td>
        while (condicao) {
          //Faça este código
        }
      </td>
    </tr>
</table>

O Java é uma linguagem fortemente tipada, temos que especificar qual é o tipo de dado que a variável terá ao declarar. Também é uma linguagem case sensitive, o tipo de dado e o nome são todos escritos em letras minúsculas, com excessão dos dados de tipo "String". Também é uma linguagem de alto nível que pode ser processada em diversos tipo de máquinas e sistemas operacionais. Ao ser executada ela passa de sua forma de alto nível para de baixo nível (Java Bytecode), traduzida através do compilador, e interpretado pelo Java Virtual Machine ficando compatível com todos sistemas operacionais e plataformas (portabilidade). 

Ex:
~~~java
int valor;
String nome;
float coeficiente;
~~~

Depois que uma variável é declarada com um tipo de dado não é possível atribuir a ela um tipo de dado diferente. Não podemos declarar uma variável de tipo "String" e depois adicionar um valor numérico a ela. Se precisarmos mudar o tipo de dado na variável em uma operação matemática envolvendo dois números inteiros que resultam em um número "float", devemos especifiar na operação que será um dado do tipo "float".

Ex:
~~~java
int valor1 = 15;
int valor2 = 2;

int quociente = valor1 / valor2; // Aqui o resultado será um número inteiro, no caso 7, pois a operação envolve dois números inteiros
quociente = (float) valor1 / valor2; // Dessa forma transformamos o resultado em float, que será 7,5
quociente = valor1/2.0f; // Também podemos fazer dessa forma, sem usar duas variáveis
~~~