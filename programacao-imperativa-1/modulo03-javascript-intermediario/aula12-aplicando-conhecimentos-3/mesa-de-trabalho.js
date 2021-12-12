// Função que compara as notas de dois participantes e retorna o vencedor, ou se foi empate.

const alicia = ["Alicia", 23, 69, 32];
const bob = ["Bob", 12, 67, 43];

function comparaVotos(participante1, participante2) {
  let p1 = 0;
  let p2 = 0;
  let resposta = "";

  for (i = 1; i < 4; i += 1) {
    if (participante1[i] !== participante2[i]) {
      participante1[i] > participante2[i] ? p1++ : p2++;
    }
  }

  if (p1 === p2) {
    resposta = "Empate";
  } else if (p1 > p2) {
    resposta = participante1[0];
  } else {
    resposta = participante2[0];
  }

  return resposta;
}

console.log(comparaVotos(alicia, bob));