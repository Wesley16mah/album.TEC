let xNave = 85;
let yNave = 366;
let colisao = false;
let meusPontos = 0;


function mostraNave(){
image(imagemDaNave, xNave, yNave, 30, 30);
}

function movimentaNave(){
if (keyIsDown(UP_ARROW)){
yNave -= 3;
}
if (keyIsDown(DOWN_ARROW)){
yNave += 3;
}
if (keyIsDown(LEFT_ARROW)){
xNave -= 3;
}
if (keyIsDown(RIGHT_ARROW)){
xNave += 3;
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemDosAssassinos.length; i++){
    colisao = collideRectCircle(xAssassinos[i], yAssassinos[i], comprimentoAssassino, alturaAssassino, xNave, yNave, 15)
    if (colisao){
      voltaNaveParaPosicaoInicial();
      somDaBatida.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaNaveParaPosicaoInicial(){
  yNave = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yNave < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaNaveParaPosicaoInicial();
  }
  if (meusPontos>=5){
    window.location.href = "index-1.html";
  }
}
function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yNave < 366;
}