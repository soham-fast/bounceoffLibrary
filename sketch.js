var fixedRect, movingRect;
var a,b;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  a=createSprite(600,400,50,80);
  b=createSprite(600,200,80,30);

  movingRect.velocityY=4;
  fixedRect.velocityY=-4;

a.velocityY=-4;
b.velocityY=4;

}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceOff(movingRect,fixedRect);
  bounceOff(a,b);
  drawSprites();
}

