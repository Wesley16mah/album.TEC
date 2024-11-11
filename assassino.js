let xAssassinos = [600, 600, 600, 600, 600, 600];
let yAssassinos = [40, 96, 150, 210, 270, 318];
let velocidadeAssassinos = [2, 2.5, 3.2, 5, 3.4, 2.4];
let comprimentoAssassino = 50;
let alturaAssassino = 40;

function mostraAssassino(){
  for (let i = 0; i < imagemDosAssassinos.length; i++){
    image(imagemDosAssassinos[i], xAssassinos[i], yAssassinos[i], comprimentoAssassino, alturaAssassino);
  }
}

function movimentaAssassino(){
  for (let i = 0; i < imagemDosAssassinos.length; i++){
    xAssassinos[i] -= velocidadeAssassinos[i];
  }
}

function voltaPosicaoInicialDoAssassino(){
  for (let i = 0; i < imagemDosAssassinos.length; i++){
    if (passouTodaATela(xAssassinos[i])){
      xAssassinos[i] = 600;
    }
  }
}

function passouTodaATela(xAssassino){
  return xAssassino < - 50;
}