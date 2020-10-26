
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;


function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}


function setup() {
  
  createCanvas(500,400);
  
  monkey = createSprite(80,320,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
  
}


function draw() {
  
  background("white");
  
  if(keyDown("space") && monkey.y > 100){
     monkey.velocityY = -12;
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(ground.x < 0){
     ground.x = ground.width/2;
   }
  
  food();
  obstacles();
  
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score : " + score,400,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : " + survivalTime,100,50);
   
  drawSprites();
  
}


function food(){
  
  if(frameCount % 80 === 0){
      banana = createSprite(400,165,10,40);
      banana.velocityX = -6;
      banana.y = Math.round(random(120,200));
      banana.scale = 0.1;
      banana.addImage("banana.png",bananaImage);

      banana.lifetime = 134;

      banana.depth = monkey.depth;
      monkey.depth = monkey.depth +1;

      foodGroup.add(banana);
   }
  
}


function obstacles(){
  
  if(frameCount % 300 === 0){
      obstacle = createSprite(400,330,10,40);  
      obstacle.velocityX = -6;
      obstacle.scale = 0.1;
      obstacle.addImage("obstacle.png",obstacleImage);

      obstacle.lifetime = 150;

      obstacleGroup.add(obstacle);
   }
  
}