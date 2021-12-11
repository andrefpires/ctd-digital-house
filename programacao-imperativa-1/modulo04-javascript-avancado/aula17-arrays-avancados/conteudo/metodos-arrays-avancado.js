// array.map() - Itera sob um array realizando operações indicadas no seu primeira parâmetro, uma callback. Ao final é retornado um novo array sem ter alterado o original.
const numbersArr = [2, 4, 6, 3, 11];
const doubleNumbersArr = numbersArr.map((element) => {
  return element * 2;
});

console.log("MAP");
console.log(numbersArr);
console.log(doubleNumbersArr);

// array.filter() - Filtra os elementos de um array segundo uma condição passada por callback.
const oddNumbers = numbersArr.filter((element) => {
  return element % 2 !== 0
});

console.log("FILTER");
console.log(oddNumbers);

// array.reduce() - Neste método temos dois parâmetros, o acumulador e o elemento atual, sempre é retornado por último o acumulador.
const soma = numbersArr.reduce((accumulator, element) => {
  return accumulator + element;
});

console.log("REDUCE");
console.log(soma);

// array.forEach() - Itera sob o array como o map, mas sem retornar nenhum valor.
console.log("forEACH");

const countrys = ["Brazil", "Spain", "England"];
countrys.forEach((element) => {
  console.log("Im live in " + element);
});