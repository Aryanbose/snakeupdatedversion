var snake,apple,snakeBody;
var previousx,previousy;
var length = 0;
var direction = 'e';
var score = 0;
var gameState = true;
function setup() {
  createCanvas(windowWidth-20,windowHeight);
frameRate(10)
apple = createSprite(400, 200, 10, 10);
apple.x = Math.round(random(250,1080))
apple.y = Math.round(random(250,windowHeight))
apple.shapeColor = "Red"
snake = createSprite(24,45,10,10)
snake.shapeColor = "Green"


snakeBody=[]
}

function draw() {
  background('black');  
  if(gameState == false){
    textSize(80)
    text("GAME OVER",windowWidth/2,windowHeight/2)
  }
  if (snake.isTouching (apple)){
    grow()
    apple.x = Math.round(random(250,1080))
    apple.y = Math.round(random(250,windowHeight))
    score+=1;
  }
  lasting();
  gameStat();
drawSnake();
drawSprites();
    textSize(15)
    fill("white")
    text("SCORE: "+score,500,40);
previousx = snake.x
previousy = snake.y
}

function drawSnake (){
if (gameState == true){
  for (var i=snakeBody.length-1;i>=1;i--){
    snakeBody[i].x=snakeBody[i-1].x
    snakeBody[i].y=snakeBody[i-1].y
    
  }
  if (snakeBody.length !=0)
  {
    snakeBody [0].x = previousx
    snakeBody[0].y = previousy
  }

}
}


function grow(){

  var snakeGrowing;
  snakeGrowing = createSprite(24,45,10,10);
snakeGrowing.shapeColor="green"
  if (direction=='n'){
    snakeGrowing.x = snake.x
    snakeGrowing.y = snake.y+10

  }
  if (direction=='s'){
    snakeGrowing.x = snake.x
    snakeGrowing.y = snake.y-10

}

if (direction=='e'){
  snakeGrowing.y= snake.y
  snakeGrowing.x= snake.x-10

}
if (direction=='w'){
  snakeGrowing.y = snake.y
  snakeGrowing.x = snake.x+10

}
snakeBody.push(snakeGrowing)
}

function keyPressed(){
  if(gameState = true){
    if (keyCode ==RIGHT_ARROW && direction != 'w'){
      snake.velocityX = 10;  snake.velocityY = 0
  direction = 'e';  
    }
    if (keyCode==LEFT_ARROW && direction != 'e'){
      snake.velocityX = -10;  snake.velocityY = 0
    direction = 'w';
    }
    if (keyCode==UP_ARROW && direction != 's'){ 
      snake.velocityY = -10; 
      snake.velocityX = 0;
    direction = 'n';
    }
    if (keyCode==DOWN_ARROW && direction != 'n'){
      snake.velocityY = 10;  
      snake.velocityX = 0;
    direction = 's';
  
    }
  }
   
}
function gameStat(){
  for(var start = 0;snakeBody.length>start;start++){
      if(snake.isTouching(snakeBody[start]) ){
        gameState = false 
        snake.velocityX = 0
        snake.velocityY = 0
      
      }
  }
}
function lasting(){
  if(snake.x>windowWidth){
    snake.x = 0;
  
  }
  if(snake.x<0){
    snake.x = windowWidth; 
  }
  if(snake.y>windowHeight){
    snake.y = 0;
  }
  if(snake.y<0){
    snake.y = windowHeight;
  }
}






