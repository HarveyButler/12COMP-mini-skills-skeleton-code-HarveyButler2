/********************************************************/
//
/********************************************************/
var circleX=50;
var circleY = 0;
var speed = 3;
var hieght=3;
function setup() {
  createCanvas(400, 400);
   background(50);
   movingCircle= 0;
}

function draw() {
  background(50);

 fill(200, 200, 250, 500);
    ellipse(circleX, circleY, 20, 20);
    noStroke()
    if (circleX>=400) {
    speed = -3;
    } else if (circleX<0){
speed = + 3
    }
    if (circleY>=400) {
    hieght = -3;
    } else if (circleY<0) {
    hieght =3;
}
circleX=circleX + speed
circleY= circleY+ hieght
}