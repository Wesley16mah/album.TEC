function setup() {
  createCanvas(500, 400);
  somDoEspaco.loop();
}

function draw() {
  background(imagemDoEspaco);
  mostraNave();
  mostraAssassino();
  movimentaAssassino();
  movimentaNave();
  voltaPosicaoInicialDoAssassino();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}