// ARRAYS E COLEÇÕES
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:
let arr = ["Elemento1", "Elemento2", "Elemento3", "Elemento4"];

// A. Acessar elementos específicos de um array.
console.log(arr[2]);
console.log(arr[0]);

// B. Modificar cada um dos elementos de um array e imprimi-los no console.
console.log(arr[0].replace("Elemento", "Teste"));
console.log(arr[1].replace("Elemento", "Teste"));
console.log(arr[2].replace("Elemento", "Teste"));
console.log(arr[3].replace("Elemento", "Teste"));

// C. Adicionar elementos a um array.
arr.push("Elemento5");
arr.unshift("Elemento0");
console.log(arr);

// D. Extrair elementos de um array.
arr.shift();
arr.pop();
console.log(arr);

// E. Comparar elementos de um array com os elementos de outro.
let arr2 = ["Elemento4", "Elemento3", "Elemento2", "Elemento1"];
console.log(arr[0] === arr2[0]);
console.log(arr[0] !== arr2[0]);

// ARRAY INVERTIDO
// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
function imprimirInverso(arr) {
  let tamanhoArr = (arr.length) - 1;

  for (i = 0; i < arr.length; i += 1) {
    console.log(arr[tamanhoArr]);
    tamanhoArr --;
  }
}

imprimirInverso(["Elemento1", "Elemento2", "Elemento3"]);

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function funcaoTeste(arr) {
  let tamanhoArr = (arr.length) - 1;
  let newArr = [];

  for (i = 0; i < arr.length; i += 1) {
    newArr.push(arr[tamanhoArr]);
    tamanhoArr --;
  }

  return newArr;
}

console.log(funcaoTeste(["Elemento1", "Elemento2", "Elemento3"]));