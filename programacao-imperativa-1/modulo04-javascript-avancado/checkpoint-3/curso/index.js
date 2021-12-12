const { Aluno } = require("../aluno");

function Curso(nomeCurso, notaAprovacao, faltasMax, listaEstudantes = []) {
  this.nomeCurso = nomeCurso,
  this.notaAprovacao = notaAprovacao,
  this.faltasMax = faltasMax,
  this.listaEstudantes = [
    new Aluno("André", 8, [4, 8, 10]),
    new Aluno("Rafaela", 16, [10, 5, 8]),
    new Aluno("Valéria", 12, [2, 4, 10]),
  ],
  this.adicionaEstudante = (nome, quantidadeFaltas, notas) => {
    this.listaEstudantes.push(new Aluno(nome, quantidadeFaltas, notas));
  },
  this.aprovado = (nome) => {
    const { quantidadeFaltas, calcularMedia } = this.listaEstudantes.find(estudante => estudante.nome === nome);
    const mediaEstudante = calcularMedia();
    let situacaoEstudante = false;

    if (mediaEstudante >= 7 && quantidadeFaltas < 16 || mediaEstudante >= 8 && quantidadeFaltas === 16) {
      situacaoEstudante = true;
    }

    return situacaoEstudante;
  },
  this.aprovacaoGeral = () => {
    const sala = [];
    this.listaEstudantes.forEach((estudante) => {
      sala.push(`${estudante.nome}: ${this.aprovado(estudante.nome)}`);
    });

    return sala;
  };
};

module.exports = {
  Curso,
};
