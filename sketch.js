var car ,wall,car2,car3;
var speed,weight;
function setup() {
createCanvas(1600,600);


speed = random(5,10);
weight = random(400,1500);



wall = createSprite(870,300,50,600);
wall.shapeColor = "white";


car = createSprite(50,300,50,50);
car.velocityX = speed;
car.shapeColor = 0;


car2 = createSprite(50,200,50,50);
car2.velocityX = speed;
car2.shapeColor = "orange"

car3 = createSprite(50,400,50,50);
car3.velocityX = speed;
car3.shapeColor = "lightblue";

}


function draw() {

  background("red");

if(wall.x - car.x < car.width/2 + wall.width/2) {
  car.velocityX = 0;
  var deformation = 0.5 * width * speed * speed/22500;
  
  if(deformation>290) {
    car.shapeColor = "green";
   
  }
  if(deformation<290 && deformation>190) {
    car.shapeColor = "yellow";
  }
  if(deformation<190) {
    car.shapeColor = "blue";
  }
}



if(wall.x - car2.x < car2.width/2 + wall.width/2) {
  car2.velocityX = 0;
  var deformation = 0.5 * width * speed * speed/22500;
  
  if(deformation>290) {
    car2.shapeColor = "green";
   
  }
  if(deformation<290 && deformation>200) {
    car2.shapeColor = "yellow";
  }
  if(deformation<200) {
    car2.shapeColor = "blue";
  }
}


if(wall.x - car3.x < car3.width/2 + wall.width/2) {
  car3.velocityX = 0;
  var deformation = 0.5 * width * speed * speed/22500;
  
  if(deformation>290) {
    car3.shapeColor = "green";
   
  }
  if(deformation<290 && deformation>200) {
    car3.shapeColor = "yellow";
  }
  if(deformation<200) {
    car3.shapeColor = "blue";
  }
}


  drawSprites();
}
