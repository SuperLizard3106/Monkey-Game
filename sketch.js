
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  ground = createSprite(200,380,800,50);
  ground.x = ground.width/2;
  

  
  monkey = createSprite(50,330,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
   
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
  ground.velocityX = -2;
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  
  if (keyDown("space") && monkey.y >=324) {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime: " + survivalTime, 100, 50 );
  
  
  Food();
  Obstacle();
  drawSprites();
}

function Food(){
  if (frameCount%80 === 0) {
    banana = createSprite(200,200,20,20);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.x = 400;
    banana.velocityX = -4;
    banana.lifetime = 120;
    FoodGroup.add(banana);
  }
  
}

function Obstacle(){
  if (frameCount%300 === 0) {
    obstacle = createSprite(200,200,20,20);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.2;
    obstacle.x = 400;
    obstacle.velocityX = -4;
    obstacle.y = 330;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
    
  }
}


