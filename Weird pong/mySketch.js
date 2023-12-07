var a = 175;
var b = 50;
var c = 200;

function setup() {
	createCanvas(400, 400);
}

function draw() {
  background(20,200,200);
  fill(0,15,20);
  rect(a,300,100,20);
  fill(150,100,200);
  ellipse(c,b,50,50);
  
  if(c > a - 40 && c < a + 80) {
  	if(b > 280 && b < 320) {
  		while(b > 0) {
        b = b - 2; 
      }
      c = random(50,350);
    }
  }
  
  b = b + 2;

}

  
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    a = a + 25;
  } else if (keyCode === LEFT_ARROW) {
    a = a - 25;
  }
  return false; // prevent default  
}

