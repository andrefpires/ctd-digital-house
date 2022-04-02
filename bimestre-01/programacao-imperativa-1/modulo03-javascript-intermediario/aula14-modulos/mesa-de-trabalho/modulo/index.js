const fs = require("fs");

function soma(num1, num2) {
  return num1 + num2;
}

function escreva(texto) {
  fs.writeFileSync("dados.txt", texto);
}

function adicionarDados(texto) {
  fs.appendFileSync("dados.txt", texto);
}

function lerArquivo(arquivo) {
  return fs.readFileSync(arquivo, "utf-8");
}

module.exports = {
  soma,
  escreva,
  adicionarDados,
  lerArquivo,
}