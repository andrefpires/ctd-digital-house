const modulo = require("./modulo");

console.log(modulo.soma(1, 1));

modulo.escreva("Irineu Silva");
let dados = modulo.lerArquivo("dados.txt");
console.log(dados);

modulo.adicionarDados(", Muriel Coragem");
dados = modulo.lerArquivo("dados.txt");
console.log(dados);