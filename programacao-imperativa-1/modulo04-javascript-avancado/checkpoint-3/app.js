const { Curso } = require("./curso");

const matematica = new Curso("Matemática", 7, 16);

console.log(matematica);
console.log(matematica.listaEstudantes[1].calcularMedia());
matematica.adicionaEstudante("César", 6, [9, 4, 8]);
console.log(matematica);
console.log(matematica.listaEstudantes[3].calcularMedia());