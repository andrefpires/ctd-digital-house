// Passar os nomes dos filmes para letras maiúsculas usando loops
let filmes= ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"];

function converterMaiusculas(arr) {
  let filmesMaiusculas = [];

  for (i = 0; i < arr.length; i += 1) {
    filmesMaiusculas.push(arr[i].toUpperCase());
  }

  return filmesMaiusculas;
}

console.log(converterMaiusculas(filmes));

// Passar elementos de um array para outro
let filmesComedia = ["O Mentiroso", "Como se fosse a primeira vez", "Anjos da Lei", "Rua Cloverfield, 10"];
let intruso = "";

function passagemDeElementos(arr1, arr2) {
  for (i = 0; i < arr2.length; i += 1) {
    if (arr2[i] === "Rua Cloverfield, 10") {
      intruso = arr2[i];
    } else {
      arr1.push(arr2[i]);
    }

  }
}

passagemDeElementos(filmes, filmesComedia);
console.log(filmes);
console.log(intruso);

