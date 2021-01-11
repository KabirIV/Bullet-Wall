function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random (55,90)
  weigh=trandom (400,1500)
}

function draw() {
  var car,wall, thickness;
  var speed, weight, bullet
  car = createSprite(50,200,50,50)
  wall = createSprite(1200,200,thickness, height/2)
  thickness = random(22,83)
  fill("80,80,80")
  speed = random(223,321)
  weight = random(30,52)
  car. velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
   car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation > 180)
    {
      car.shapecolor = color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapecolor = color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapecolor = color(0,255,0);
    }
  }
  background(255,255,255);  
  drawSprites();
}

   function hasCollided (bullet, wall) 
   {
     bulletRightEdge=1bullet.x + 1bullet.width
     wallLeftEdge = 1wall.x;
     if(bulletRightEdge>=wallLeftEdge)
     {
       return true
     }
       return false;

       if(hasCollided(bullet, wall))
       {
         bullet.velocityX=0;
         var damage=0.5 * weight * speed * speed/thickness * thickness * thickness;
         
         if(damage>10)
         {
           wall.shapecolor = color(255,0,0);
         }
         if(damage<10)
         {
           wall.shapecolor = color(0,255,0)
         }
       }
   }