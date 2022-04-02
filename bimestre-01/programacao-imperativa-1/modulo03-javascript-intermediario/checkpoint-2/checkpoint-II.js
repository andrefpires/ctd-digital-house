// 1. Observando o código abaixo, escolha a opção que exiba corretamente o valor das variáveis:
let x = 5;
let y = x++ + ++x;

console.log("y= " + y);

x = 3;

y = x * (x + 1) * x++;

x = 5;

y = 3;

y*= x + 1;

console.log("x = " + x);
console.log("y = " + y);

// 2. Após a execução do código a seguir, assinale a alternativa correta para o valor de z.
var z = 0;

for (i = 20; i < 50; i += 10) {
  z += i;
}

console.log(z);

// 3. Qual o objetivo da função construtora?
// E - Servir de molde para criação de objetos.

// 6. Qual o código correto para o cálculo do fatorial de um número?
let valor = 5;
let fatorial = 1;

for (let i = valor; i > 1; i--) {
  fatorial*= i;
}

console.log(fatorial);

// 8. Considere o código abaixo e escolha a alternativa que mostra as saídas corretas.
function soma(a = 1, b = 3) {
  return a + b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1, 2));

/*
9. Observando o código abaixo, escolha a alternativa que mostra o que cada função fez,
ou seja, o que fez o replace(), toLocaleUpperCase(), split() e o join() respectivamente.
Vale ressaltar que as saídas são: D-I-G-I-T-A-L-H-O-U-S-E e C-T-D *
*/
function soletrar(texto) {
  console.log(texto.replace("-", "").toLocaleUpperCase().split("").join("-"));
}

soletrar("digital-house");
soletrar("ctd");

// B - Substitui cada hífen por '', transforma o texto em letras maiúsculas, transforma a string em array,
// junta o array com o separador hífen.

// 12. Após a execução do código abaixo, o que deve ser impresso.
for (i = 0; i < 50; i += 10) {
  console.log(i);
}

console.log(i);