var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";


}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();

}