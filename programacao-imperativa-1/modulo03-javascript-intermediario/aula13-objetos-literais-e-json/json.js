// JSON - JavaScript Object Notation
// Sintaxe utilizada para troca de dados entre diferentes sistemas
let json = [{nome: "Emanoel", idade: 56}];
let jsonString = JSON.stringify(json);
let jsonParse = JSON.parse(jsonString);

console.log(typeof json);
console.log(typeof jsonString);
console.log(typeof jsonParse);