/********************************************************/
//
/********************************************************/
var movingCircle
function setup() {
  createCanvas(400, 400);
   background(50);
   movingCircle= 0;
}

function draw() {
  background(50);
  movingCircle=movingCircle +1
 fill(200, 200, 250, 500)
    ellipse(movingCircle, movingCircle, 20, 20);
    noStroke()
}