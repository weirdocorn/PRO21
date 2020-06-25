var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(30,200,10,10);
  bullet.velocityX = 2;

  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*bullet.weight*bulled.speed*bullet.speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor(255,0,0);
    }

    if(damage<10){
      wall.shapeColour(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLwefEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}