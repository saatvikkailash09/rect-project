//declare the varibles
var fixedrect, movingrect

function setup() {
  createCanvas(800,800);

  //create the fixed rect sprite
  fixedrect = createSprite(400, 200, 10, 50);
  fixedrect.shapeColor="green";

  //create the moving rect sprite
  movingrect = createSprite(300,200,50,10);
  movingrect.shapeColor="green";
}

function draw() { 
  
  //make the background
  background(255,255,255);  
  
  //make the controls to move the moving rect
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  //make the collision between the two rectangles
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.x-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  } else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  


  //display all of the sprites
  drawSprites();
}