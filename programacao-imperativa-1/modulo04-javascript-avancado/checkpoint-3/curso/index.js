const { Aluno } = require("../aluno");

function Curso(nomeCurso, notaAprovacao, faltasMax, listaEstudantes = []) {
  this.nomeCurso = nomeCurso,
  this.notaAprovacao = notaAprovacao,
  this.faltasMax = faltasMax,
  this.listaEstudantes = [
    new Aluno("André", 4, [4, 8, 10]),
    new Aluno("Rafaela", 2, [10, 7, 8]),
    new Aluno("Valéria", 12, [8, 6, 10]),
  ],
  this.adicionaEstudante = (nome, quantidadeFaltas, notas) => {
    this.listaEstudantes.push(new Aluno(nome, quantidadeFaltas, notas));
  }
};

module.exports = {
  Curso,
};
