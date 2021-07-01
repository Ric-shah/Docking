var hasDocked = false
function preload()
{
bg = loadImage("spacebg.jpg")
issimg = loadImage ("iss.png")
issimg1 = loadImage("spacecraft1.png")
issimg2 = loadImage("spacecraft2.png")
issimg3 = loadImage("spacecraft3.png")
issimg4 = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(600,350);
  spacecraft = createSprite (285, 240)
  spacecraft.addImage(issimg1)
  spacecraft.scale = 0.15
  iss = createSprite(330,130)
  iss.addImage(issimg)
  iss.scale = 0.25
}

function draw() {
  background(bg);  
  if(!hasDocked)
  {
    spacecraft.x+random(-1,1);

  
  if(keyDown("UP_ARROW"))
  
  {
    spacecraft.y = spacecraft.y -2

  }
  if (keyDown("DOWN_ARROW"))
  {
    spacecraft.y = spacecraft.y +2
    spacecraft.addImage(issimg2)
  }
  if (keyDown("RIGHT_ARROW"))
  {
    spacecraft.x = spacecraft.x +2
    spacecraft.addImage(issimg3)
  }
  if(keyDown("LEFT_ARROW"))
  {
    spacecraft.x = spacecraft.x -2
    spacecraft.addImage(issimg4)
  }

  }
  if (spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10))
  {
    hasDocked = true
    fill("white")
    text ("Docking Successfull",200,300)
  }

    drawSprites();
  
}
