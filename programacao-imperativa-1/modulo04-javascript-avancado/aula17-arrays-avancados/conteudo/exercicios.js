const numbersArr = [2, 4, 6, 3, 11];

// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
const oddNumbers = [];

numbersArr.map((element) => {
  element % 2 !== 0 ? oddNumbers.push(element) : false;
});

console.log(oddNumbers);

// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
const names = ["Maria", "Angela", "Pedro", "Maria", "Lucas"];

const namesMaria = names.filter((name, index) => {
  return name === "Maria";
});

console.log(namesMaria);

// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
const stringArr = numbersArr.reduce((accumulator, number) => {
  console.log(accumulator);
  return accumulator + " - " + number;
});

console.log(stringArr);

// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
const animais = ["Girafa", "Furão", "Elefante", "Besouro"];
animais.forEach(animal => console.log("O animal é " + animal));
