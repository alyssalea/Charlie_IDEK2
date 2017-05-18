function setup() {
  createCanvas(windowWidth, windowHeight);
  // Move the mouse across the canvas
}


  

function draw() {
  

 
 
   line(mouseY, 0, mouseY, 1000);
   
   line(0, mouseX, 1000, mouseY);
   line(0, mouseY, 1000, mouseY);
   line(0, mouseY, 1000, mouseX);
  noFill()
    stroke(random(0,300),random(0, 255), random(0, 255));
   
    line(mouseY, 0, mouseX, 1000);
     line(mouseX, 0, mouseX, 1000);
   line(mouseX, 0, mouseY, 1000);
}

function mousePressed () {
  noFill()
   background (200,0,200);
  fill(255)
  background(244, 248, 252);
 
}
  
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}


