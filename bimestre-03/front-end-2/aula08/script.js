const newButton = (texto1, texto2) => {
  const $body = document.querySelector('body');
  const $button = document.createElement('button');
  const $button2 = document.createElement('button');

  /*
  const textoBotao = document.createTextNode(texto1);
  button.appendChild(textoBotao);
  // Uma segunda forma de se fazer a linha 11
  */

  $button.textContent = texto1;
  $button2.textContent = texto2;

  $button.style.cssText = `
    background-color: blue;
    width: 200px
  `;
  $button2.onclick = () => alert('Evento está funcionando');

  $body.appendChild($button);
  $body.insertAdjacentElement('afterbegin', $button2);
  // Tem a mesma função do appendChild, porém podemos escolher o local onde será inserido, dependendo do primeiro parâmetro.
  // element.append() ou element.prepend()
};

newButton('Primeiro botão', 'Novo Primeiro Botão');
