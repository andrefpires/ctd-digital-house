// 1. Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function conversor(valorEmPolegadas) {
  const umaPolegada = 2.54;
  let valorEmCentimetros = 'Nenhum valor passado para conversão';

  if (typeof valorEmPolegadas === 'number') {
    valorEmCentimetros = valorEmPolegadas * umaPolegada
  }

  return valorEmCentimetros;
}

console.log(conversor(2));

// 2. Crie uma função que receba uma string e a converta em um URL. Ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function criadorDeUrl(dominio) {
  let url = "Dado de entrada inválido";

  if (typeof dominio === 'string' || typeof dominio === 'number') {
    url = `www.${dominio}.com.br`
  }

  return url;
}

console.log(criadorDeUrl('teste'));

// 3. Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação (!).

function colocadoraDeExclmacao(frase) {
  return `${frase}!`;
}

console.log(colocadoraDeExclmacao('Enjoy the Ride'));

// 4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function idadeCachorros(idade) {
  return `Seu cachorro tem ${idade * 7} em anos humanos`;
}

console.log(idadeCachorros(8));

// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function valorHoraDeTrabalho(salario) {
  return `Sua hora de trabalho equivale a R$ ${salario / 160}`
}

console.log(valorHoraDeTrabalho(4.200));

// 6. Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.

function imc(peso, altura) {
  return peso / (altura * altura);
}

console.log(imc(84.3, 174));