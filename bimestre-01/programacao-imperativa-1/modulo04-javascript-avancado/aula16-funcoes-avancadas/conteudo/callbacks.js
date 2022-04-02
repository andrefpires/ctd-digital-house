// Callbacks são funções passadas como argumento para que uma segunda função possa executar em sua lógica. Muito usada dentro de métodos de manipulação de arrays, em requisições à APIS
// e em casos que é necessário fazer uma verificação ou validação em mais de uma situação. Como na maioria dos casos as callbaks são passadas diretamente, sem definição prévia, é comum
// serem escritas como arrow functions.

const andar = () => console.log("O carro está andando.");
const parar = () => console.log("O carro parou.");

const acaoCarro = (func1, func2) => {
  func1();
  func2();
};

acaoCarro(andar, parar);
