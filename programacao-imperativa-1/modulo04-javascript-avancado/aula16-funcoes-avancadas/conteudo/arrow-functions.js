// A arrow function surgiu da atualização do ES 6 em 2015, para otimizar a escrita e legibilidade do código, tornando mais fácil o uso da função junto a outros recursos da linguagem.
// Com ela conseguimos tornar nosso script mais conciso, despensando o uso da palavra "function", e em alguns casos elementos constituintes da sintaxe de uma função comum.

/*
function print(mensagem) {
  console.log(mensagem);
}
*/

const print = mensagem => console.log(mensagem);

print("Arrow function");

/*
function soma(num1, num2) {
  return num1 + num2;
}
*/

const soma = (num1, num2) => num1 + num2;

conosle.log(soma(2, 3));