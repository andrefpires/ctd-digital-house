// Calculadora 1
function somar(num1, num2) {
  return num1 + num2;
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

// Calculadora 2
console.log("Teste de operações | Calculadora");

console.log(somar(8, 6));
console.log(subtrair(20, 5));

console.log(multiplicar(2, 16));

console.log(dividir(8, 2));

console.log(dividir(60, 0));

// Calculadora 3
function quadradoDoNumero(num) {
  return multiplicar(num, num);
}

function mediaDeTresNumeros(num1, num2, num3) {
  const soma1 = somar(num1, num2);
  const soma2 = somar(soma1, num3);
  const divisao = dividir(soma2, 3);

  return divisao;
}

function calculaPorcentagem(num, porcentagem) {
  const multiplicacao = multiplicar(num, porcentagem);
  const divisao = dividir(multiplicacao, 100);

  return divisao;
}

function geradorDePorcentagem(num1, num2) {
  const multiplicacao = multiplicar(num1, 100);
  const divisao = dividir(multiplicacao, num2);

  return `${divisao}%`;
}

console.log(geradorDePorcentagem(20, 80));

console.log(calculaPorcentagem(28, 25))