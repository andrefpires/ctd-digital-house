const imagens = document.querySelectorAll(".cartao img");

const urlImagens = [];
imagens.forEach((_, contador) => {
  const url = prompt(`Adicione o url para a imagem ${contador + 1}`);
  urlImagens.push(url);
});

/*
const urlImagens = (
  imagens.reduce((acc, _, index) => {
    const url = prompt(`Adicione o url para a imagem ${index + 1}`);
    acc.push(url);

    return acc;
  }, [])
);
*/


urlImagens.forEach((url, index) => {
  const imagem = document.querySelector(`#imagem-${index + 1}`);
  const tagLink = imagem.parentNode;

  tagLink.setAttribute("href", url);
  tagLink.setAttribute("target", "_blank")
  imagem.setAttribute("src", url);
});

/*
ETAPA 3
  - A div "conteudo" é o container pai que engloba todo conteúdo da página, dentro dela temos mais 3 nós do DOM que se repetem da mesma forma. Em profundidade e tags filhas.
  - dentro de cada div "cartao" temos uma tag "a" que abriga uma tag "img" diferenciando das outras apenas por seu href.
  - Tentamos utilizar outra higher order function reduce para aprimorar o código, mas não conseguimos identificar a tempo o pq de não estar dando certo.
*/