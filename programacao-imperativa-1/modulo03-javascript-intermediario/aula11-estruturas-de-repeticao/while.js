// Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.
console.log("Números ímpares:")
let i = 1;
while (i <= 100) {
  i % 2 !== 0 ? console.log(i) : false;
  i += 1;
}

// Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
console.log("Números pares:")
let ii = 1;
while (ii <= 100) {
  ii % 2 === 0 ? console.log(ii) : false;
  ii += 1;
}

// Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados),
// de 1 até esse inteiro.
function numerosImparesPares(num) {
  let numerosImpares = [];
  let numerosPares = [];

  let i = 1;
  while (i <= num) {
    i % 2 !== 0 ? numerosImpares.push(i) : numerosPares.push(i);
    i += 1;
  }

  console.log("Número: " + num);
  console.log("Números ímpares: " + numerosImpares);
  console.log("Números pares: " + numerosPares);
}

numerosImparesPares(10);

// Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
// Em seguida, através de um laço while, pede ao usuário para que entre com as notas
// de todos os alunos da sala, um por vez. Por fim, o programa mostra a média aritmética da turma.
