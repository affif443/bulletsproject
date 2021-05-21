var bullet,speed;
var weight,wall;
var thickness;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  bullet = createSprite(50,200,50,10);
  wall= createSprite(1200,200,thickness,100);

  speed=random(40,90);
  weight=random(500,1500);
  thickness=random(20,80);

  car.velocityX=speed;
}

function draw() {
  background("black");
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  bullet.velocityX=0;
  var deformation=0.5*speed*weight*speed/22509;
  if(deformation > 180){
    bullet.shapeColor= color("white");
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor= color("white");
  }
  if(deformation < 100){
    bullet.shapeColor= color("white");
  }

if(collided(bullet,wall)){
bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    bullet.shapeColor= color("red");
  }
   if(damage<10){
    bullet.shapeColor= color("yellow");
  }
   
}
  drawSprites();
}


function collided(lbullet,lwall){

  bulletRightEdge= lbullet.x + lbullet.width;
  wallRightEdge=lwall.width;

  if(bulletRightEdge>=wallRightEdge){
    return true;
  }
    return false;
}
    

}




