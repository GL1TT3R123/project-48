var player1,player2,track,energy_drink;
var stand;
var banana,rock;
var banana_group;
var score=0
var finishLine;
var key;
function preload(){

player1_Img=loadAnimation("B1.png","b2.png","b3.png")
player1R_Img=loadAnimation("B1R.png","b2R.png","b3R.png")
player2_Img=loadImage("Person-running-2.png")
track=loadImage("track.jpg")
energy_drink=loadImage("energy_drink.png")
stand=loadAnimation("stand.png")
bananaImg=loadImage("banana.png")
rockImg=loadImage("rock.png")
keyImg=loadImage("KeyPicture.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
player1=createSprite(150,height/2)
player1.addAnimation("stand",stand)
player1.addAnimation("player1",player1_Img)
player1.addAnimation("player1R",player1R_Img)
player1.scale=0.75


banana_group = new Group()
 score=0
 

}

function draw() {
  background(0,0,0);  
  image(track,0,0,width*6,height)
  Obstacle1()
  drawSprites();
  keys()
  fill("black")
  textSize(30)
  text("Score:"+ score,camera.position.x-100,100)
  
  if( player1.x>=8000){
    gameOver()
  }

if(keyIsDown(RIGHT_ARROW)){
  player1.position.x+=10
  player1.changeAnimation("player1",player1_Img)
  score = score+1
}
if(keyIsDown(LEFT_ARROW)){
  player1.position.x-=10
  player1.changeAnimation("player1R",player1R_Img)
 
}
if(keyWentUp(RIGHT_ARROW)){
  player1.changeAnimation("stand",stand)
}
if(keyWentUp(LEFT_ARROW)){
  player1.changeAnimation("stand",stand)
}
if(keyIsDown(UP_ARROW)&&player1.position.y>height-500){
  player1.position.y-=10
  player1.changeAnimation("player1",player1_Img)
}
if(keyIsDown(DOWN_ARROW)&&player1.position.y<height/2+90){
  player1.position.y+=10
  player1.changeAnimation("player1",player1_Img)
}
camera.position.x=player1.x+600

if(banana_group.isTouching(player1)){
  banana_group[0].destroy()
  score-=50
}

}
function Obstacle1(){
  if(frameCount%60===0){
    banana=createSprite(camera.position.x+400,300)
    banana.scale=0.15
    banana.velocityX=-3
    banana_group.add(banana)
    banana.y=Math.round(random(height-500,height/2+70))
    var rand= Math.round(random(1,2))
    switch(rand){
      case 1: banana.addImage(bananaImg)
      break;
      case 2: banana.addImage(rockImg)
      break;

    }
banana.lifetime= 300
  }
}

function gameOver(){
  banana_group.destroyEach()
}
function keys(){
  if(player1.position.x>1500){
    key = createSprite(Math.round(random(height/2,height/2-500)))
    key.addImage("key",keyImg)
    key.scale=0.05
  }
}