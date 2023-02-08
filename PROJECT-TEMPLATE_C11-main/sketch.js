var ship, ship_running;
var sea, ivisibleSea, seaImage;

function preload(){
  ship_running = loadAnimation(
    "/assets/ship-1.png",
    "/assets/ship-2.png",
    "/assets/ship-3.png",
    "/assets/ship-4.png"
    );
  
    seaImage = loadAnimation (
    "/assets/sea.png"
    );
  
  
  }

  
  sea.addImage(seaImage);
  
function setup(){
  createCanvas(400,400);
  
 
  //crie um sprite de ship
  ship = createSprite(50, 180, 20, 50);
  ship.addAnimation("running", ship_running);

  //adicione dimensão e posição ao ship
  ship.scale = 0.5;
  ship.x = 50;

  //crie um sprite sea (mar)
  sea = createSprite(200, 180, 400, 20);
  sea.addAnimation("mar",seaImage)
}

function draw() {
  background("blue");
   
  if(seaImage.x < 0) {
sea.x = sea.width/2;

  }
  
  
  drawSprites();

    
 
}
