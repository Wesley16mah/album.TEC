let imagemDoEspaco;
let imagemDaNave;
let imagemDoAssassino;
let imagemDoAssassino2;
let imagemDoAssassino3;
let imagemDoAssassino4;
let somDoEspaco;
let somDaBatida;
let somDaPontuacao;

function preload(){
imagemDoEspaco = loadImage("imagens/espaco.png");
imagemDaNave = loadImage("imagens/nave.png");
imagemDoAssassino = loadImage("imagens/assassino.png");
imagemDoAssassino2 = loadImage("imagens/assassino.png");
imagemDoAssassino3 = loadImage("imagens/assassino.png"); 
imagemDoAssassino4 = loadImage("imagens/assassino.png");
imagemDosAssassinos = [imagemDoAssassino, imagemDoAssassino2, imagemDoAssassino3, imagemDoAssassino4 ]
somDoEspaco = loadSound("sons/espacosom.mp3");
somDaBatida = loadSound("sons/batida2.mp3");
somDoPonto = loadSound("sons/ponto.mp3");
  
}


