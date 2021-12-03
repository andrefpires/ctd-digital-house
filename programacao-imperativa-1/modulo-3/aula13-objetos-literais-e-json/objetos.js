let objeto = {
  prop1: "valor1",
  prop2: undefined, // Propriedade
  propNome: "Ursula", // Propriedade
  prop3: function metodoPrintaSaudacao() { // Método
    console.log("Olá, " + this.propNome + "! Como você está?") // this acessa a propriedade
  },
}

objeto.prop3();

// Função construtora
function Construtora(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;
}

const newObject = new Construtora("André", 26, "andrefpires1@gmail.com");
console.log(newObject);