/*
Um módulo é um bloco de código, escrito em arquivo próprio, para que possamos reutilizar. Assim não precisamos reescrever quando for necessário o utilizar, apenas o exportamos,
e importamos para o arquivo em que será usado.
*/

/*
Existem três tipos de módulos:
- Nativo do Node.js, ja vem instalado quando criamos um projeto com o Node.js
- Módulos de terceiros que podemos instalar utilizando o gerenciador de pacotes npm.
- Módulos criados por nós mesmos.
*/

// POR CONVENÇÃO A VÁRIAVEL QUE ABRIGA O MÓDULO QUE ESTAMOS SOLICITANDO DEVE REVEBER O MESMO NOME DO MÓUDLO OU UMA ABREVIATURA.

const helloWorld = require("./hello-world"); // Não é necessário escrever a extensão do arquivo.
const fs = require("fs"); // Módulo nativo "fyle system" do Node.js.
const moment = require("moment");

const dados = fs.readFileSync("./dados.txt", "utf8"); //Função do objeto/módulo "fs" que lê o conteúdo de um arquivo txt. É necessário declarar o tipo de encoding no segundo parâmetro, no caso "utf-8".
const data = moment().format("MMM do YY"); // Alguns módulos devem ser executados na hora do uso, como no caso do moment.

helloWorld();
console.log(dados);
console.log(data);

let users = fs.readFileSync("./dados.json", "utf-8");
let usersJSON = JSON.parse(users); // JSON.parse() transforma os dados json em um um objeto literal, assim podemos acessar suas props e métodos.
console.log(usersJSON.nome);

const user = {
  nome: "André",
  sobrenome: "Ferreira",
  idade: 26,
};

const userJSON = JSON.stringify(user); // A função writeFileSync só aceita dados do tipo string, para isso usamos JSON.stringfy()

fs.writeFileSync("./dados.json", userJSON);
users = fs.readFileSync("./dados.json", "utf-8");
usersJSON = JSON.parse(users);
console.log(usersJSON.idade);


const comentario = " Comentário adicionado";

fs.appendFileSync("./dados.txt", comentario);
// Como todos os outros métodos trazidos pelo pacote "fs", se o arquivo citado no parâmetro não existir, ele será criado.
// O método appendFileSync() adiciona um texto ao arquivo sem apagar o conteúdo que já estiver dentro.