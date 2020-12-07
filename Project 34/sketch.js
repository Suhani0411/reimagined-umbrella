const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dogimg01,dogimg02,dog, happyDog, database, foodS, foodStock;

function preload()
{
  dogimg01=loadImage("images/dogimg.png");
  dogimg02=loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(800, 700);
  background(46, 139, 87)
  database=firebase.database();
  dog=createSprite(250,250,20,20);
  dog.addImage(dogimg01);
  dog.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg02);
  }
  





  drawSprites();
  textSize(15);
  noStroke();
  fill("blue");
  text(foodS,100,100);
  text("Press Up Arrow to Feed your dog Milk",100,150);
  //add styles here

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}





















