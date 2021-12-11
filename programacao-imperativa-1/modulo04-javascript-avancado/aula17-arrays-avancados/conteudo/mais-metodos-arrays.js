// array.slice() - Retorna uma copa do array apenas com o intervalo de index informado.

let numbersArr = [5, 9, 4, 8, 2];
const subNumbersArr = numbersArr.slice(1, -1); // Como o segundo parâmetro, que indida o index final que deve ser copiado, é -1 só será copiado até o penúltimo.

console.log("slice");
console.log(subNumbersArr);

// array.splice() - Remove e adiciona elementos a um array. O primeiro e segundo parâmetros são para indicar o index de início e quantos elementos serão removidos do array. Os demais
// são elementos que serão adicionado ao array a partir do indíce mencionado.
numbersArr.splice(1, 2, 1, 3);
console.log("splice");
console.log(numbersArr); // Resultado [5, 1, 3, 8, 2];

// array.sort() - Usado para ordenar elementos de um array.
numbersArr.sort();
console.log("sort (ordem crescente)");
console.log(numbersArr);

numbersArr.sort((a, b) => a + b);
console.log("sort (ordem decrescente)");
console.log(numbersArr);

/*
array.flat() - Achata elementos do array que também são arrays, colocando os elementos desse subarray ao mesmo nivel dos outros. O parâmetro passado define quando níveis serão achatados.
O array original não é modificado.

let arr = [5, 9, 4, 8, 2, [6, 12, 15]];
const newArray = arr.flat(); // Por algum motivo não funciona no meu vs code
console.log(newArray);
*/

// array.includes() - Retorna um valor booleano dependendo do resultado de procura de um elemento em específico passado no primeiro parâmetro.
// Também podemos passar o indíce onde se iniciara a pesquisa no segundo parâmetro.

const filmes = ["Forrest Gump", "Gone Girl", "Um olhar do paraíso", "Guardiões da Galáxia", "Spawn", "Gone Girl"];
const spawn = filmes.includes("Spawn", 2);
console.log("includes");
console.log(spawn);

// array.find() - Retorna o primeiro elemento que satisfizer a condição passada.
const goneGirl = filmes.find(filme => filme === "Gone Girl");
console.log("find");
console.log(goneGirl);
