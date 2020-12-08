function setup() {

  createCanvas(400, 400);

}

function draw() {

  background(255, 255, 0);
  strokeWeight(2);

  //trunk
  fill(100, 50, 0);
  rect(175, 300, 50, 100);

  //tree
  fill(0, 200, 0);
  triangle(200, 0, 300, 300, 100, 300);

  //ornament 1
  line(200, 75, 200, 100);
  fill(200, 0, 0);
  ellipse(200, 100, 30, 30);

  //ornament 2
  line(170, 175, 170, 200);
  fill(250, 0, 250);
  ellipse(170, 200, 30, 30);

  //ornament 3
  line(250, 235, 250, 260);
  fill(0, 50, 255);
  ellipse(250, 260, 30, 30);

  //text
  textSize(40);
  fill(255, 0, 0);
  text('Happy Holidays!', 50, 50);
}
