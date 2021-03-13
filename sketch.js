var player;
var npc1, npc2, npc3, npc4, npc5;
var edge;
var wall1, wall2, wall3, wall4;
var gameState = 1;

function setup() {
  createCanvas(900,1000);
  player = createSprite(450,920,20,50);
    player.shapeColor="red";
  npc1 = createSprite(60,750,20,50);
    npc1.shapeColor="blue";
    npc1.velocityX = 7;
  npc2 = createSprite(840,600,20,50);
    npc2.shapeColor="blue";
    npc2.velocityX = -7;
  npc3 = createSprite(60,450,20,50);
    npc3.shapeColor="blue";
    npc3.velocityX = 7;
  npc4 = createSprite(840,300,20,50);
    npc4.shapeColor="blue";
    npc4.velocityX = -7;
  npc5 = createSprite(60,150,20,50);
    npc5.shapeColor="blue";
    npc5.velocityX = 7;
  wall1 = createSprite(40,500,10,1000);
  wall2 = createSprite(450,960,900,10);
  wall3 = createSprite(860,500,10,1000);
  wall4 = createSprite(450,40,900,10);
  
}

function draw() {
  background("brown");
  npc1.bounceOff(wall1);
  npc1.bounceOff(wall3);
  npc2.bounceOff(wall1);
  npc2.bounceOff(wall3);
  npc3.bounceOff(wall1);
  npc3.bounceOff(wall3);
  npc4.bounceOff(wall1);
  npc4.bounceOff(wall3);
  npc5.bounceOff(wall1);
  npc5.bounceOff(wall3);
  if(gameState === 1){
    if(keyDown("UP_ARROW")){
      player.y -= 7
    }  
    if(keyDown("DOWN_ARROW")){
      player.y += 7
    }  
    if(keyDown("RIGHT_ARROW")){
      player.x += 7
    }  
    if(keyDown("LEFT_ARROW")){
      player.x -= 7
    }
  }
  if(player.isTouching(npc1)||player.isTouching(npc1)||player.isTouching(npc1)||player.isTouching(npc1)||player.isTouching(npc1)||player.isTouching(npc1)){
    npc1.velocityX=0;
    npc2.velocityX=0;
    npc3.velocityX=0;
    npc4.velocityX=0;
    npc5.velocityX=0;
    gameState=0;
  }
  if(gameState===0){
    stroke("white")
    textSize(50)
    text("Game over",350,540)
  }
  drawSprites();
}