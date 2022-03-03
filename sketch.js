//Criando as variáveis
var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

//Carregando os arquivos de imagem
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
//Criando a tela
  createCanvas(400,400);
  
// Fundo em movimento
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//criando menino que corre
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// crie Boundary (Limite) esquerdo
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie Boundary (Limite) direito
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  //Pinta o fundo de preto
  background(0);
  //faz o caminho se movimentar
  path.velocityY = 4;
  
  // menino se movendo no eixe X com o mouse
  boy.x = World.mouseX;
  
  //faz a configuração das bordas
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
   
  //Desenha todos os sprites
  drawSprites();
}
