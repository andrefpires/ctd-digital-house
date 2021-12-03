function microondas(comida, tempoSolicitado) {
  const comidas = ['pipoca', 'macarrao', 'carne', 'feijao', 'brigadeiro'];
  const existe = comidas.includes(comida);
  const posicaoBotao = comidas.indexOf(comida);
  const tempos = [[20, 10, 30], [16, 8, 24], [30, 15, 45], [24, 12, 36], [16, 8, 24]];

  if (existe) {
    if (tempoSolicitado > tempos[posicaoBotao][0] && tempoSolicitado <= tempos[posicaoBotao][2]){
      console.log('Sua comida queimou');
    } else if (tempoSolicitado > tempos[posicaoBotao][2]) {
      console.log('Kabuum');
    } else {
      console.log('Prato pronto. Bom apetite');
    }
  } else {
    console.log('Prato Inexistente');
  }
}

microondas('macarrao', 25);

