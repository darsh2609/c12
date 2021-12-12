var jack,jack_running,path;
var pathImg,jackImg;
var boundary1,boundary2;

function preload(){
  //pre-load images
  jackImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png")


}

function setup(){
  createCanvas(600,400,);
 background("black");
  //create sprites here
  

   path=createSprite(200,200);
   path.addImage(pathImg);
   path.velocityy=-4;
   path.scale=1.2


   jack=createSprite(200,160,20,50);
   jack.addAnimation("running",jackImg);
   jack.scale=0.1;


   boundary1=createSprite(40,200,10,400);
   boundary1.visible=false;

   boundary2=createSprite(365,200,10,400)
   boundary2.visible=false;


}
  



  


  
function draw() {
  background(500);
  if(path.y>400) {
    path.y=height/2
  }
  
 
  jack.x=World.mouseX;
   jack.collide(boundary1);
   jack.collide(boundary2);
  drawSprites();
}
