// MÉTODOS DE STRINGS
const texto = "Oi, eu sou o André";

// length
console.log(texto.length);

// indexOf
console.log(texto.indexOf("A"));

// slice - Não altera o valor da variável
const palavra = texto.slice(0, 2);
console.log(texto);
console.log(palavra);

// trim
let espacosNoInicio = "        Olá";
console.log(espacosNoInicio);
console.log(espacosNoInicio.trim());

// split
console.log(texto.split(" "));

// replace
console.log(texto.replace("André", "Rafaela"));

// MÉTODOS DE ARRAYS
let produtosCompra = ["Desinfetante", "Arroz", "Feijão", "Papel Higiênico"];

// join - junta todos os elementos do array em uma string
console.log(produtosCompra.join());

// pop - remove e retorna o último elemento
console.log(produtosCompra.pop());

// push - adiciona um elemento a última posição de um array
produtosCompra.push("Carne")
console.log(produtosCompra);

// shift - remove e retorna o primeiro elemento
console.log(produtosCompra.shift());
console.log(produtosCompra);

// unshift - adiciona um ou mais elementos ao início de um array
produtosCompra.unshift("Vassoura", "Sabão em pó");
console.log(produtosCompra);

// Outra aula
// function Conta(numeroParam, nomeParam) {
//   this.numero = numeroParam;
//   this.nome = nomeParam;
// }

// let contaVar = new Conta(12, "teste");

// console.log(contaVar);