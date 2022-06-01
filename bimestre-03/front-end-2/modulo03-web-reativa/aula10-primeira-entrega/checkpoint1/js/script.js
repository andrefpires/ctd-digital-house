const adicionaFilme = (e) => {
  const nomeInput = document.querySelector("#nome");
  const descricaoInput = document.querySelector("#descricao");
  const urlInput = document.querySelector("#imagem");

  const nome = document.createElement("h3");
  const imagem = document.createElement("img");
  const descricao = document.createElement("p");

  imagem.src = urlInput.value;
  nome.textContent = nomeInput.value;
  descricao.textContent = descricaoInput.value;

  const filmes = document.querySelector("#filmes");
  const novoFilme = document.createElement("div");
  novoFilme.className = "filmesCard";
  const infosFilme = document.createElement("div");

  novoFilme.appendChild(imagem);
  infosFilme.appendChild(nome);
  infosFilme.appendChild(descricao);

  novoFilme.appendChild(infosFilme);
  filmes.appendChild(novoFilme);

  urlInput.value = "";
  nomeInput.value = "";
  descricaoInput.value = "";
};

const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", adicionaFilme);
