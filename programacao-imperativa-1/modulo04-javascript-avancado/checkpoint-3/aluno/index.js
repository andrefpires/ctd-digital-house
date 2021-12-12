function Aluno (nome, quantidadeFaltas, notas) {
  this.nome = nome,
  this.quantidadeFaltas = quantidadeFaltas,
  this.notas = notas,
  this.calcularMedia = () => {
    const total = this.notas.reduce((total, nota) => {
      return total + nota;
    }, 0)

    const media = total / this.notas.length;
    const resposta = `A média de ${this.nome} é: ${media.toFixed(2)}`;

    return resposta;
  },
  this.faltas = () => {
    this.quantidadeFaltas += 1;
  }
}

module.exports = {
  Aluno,
};
