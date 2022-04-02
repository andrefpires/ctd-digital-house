// Crie um loop utilizando for que se repita 5 vezes.
// Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.
for (i = 0; i < 5; i += 1) {
  console.log("Olá, Mundo!");
}

// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições
// de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9)
// sejam mostrados os números das repetições no console.
for (i = 1; i <= 10; i += 1) {
  i % 2 !== 0 ? console.log(i) : 0;
}

// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
for (i = 1; i <= 10; i += 1) {
  console.log("Tabuada do: " + i);
  for (ii = 1; ii <= 10; ii += 1) {
    console.log(ii * i);
  }
}
