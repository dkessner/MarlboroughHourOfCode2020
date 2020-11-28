//intro.js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //r, g, b values (0-255)
  background(252, 38, 102);

  noStroke();

  fill(56, 235, 190);
  //ellipse (x, y, w, h) (x and y of center of circle)
  ellipse(20, 20, 20, 30);
  ellipse(width/2, height/2, 50, 50);

  //rect(x, y, w, h) (x and y of top left corner)
  rect(300, 50, 60, 10);

  rectMode(CENTER);
  //r, g, b, a values (a/alpha = transparency)
  fill(224, 156, 240, 150);
  stroke(1);
  strokeWeight(2);
  rect(width/2, height/2, 20, 20);
  fill(236, 255, 150, 150);
  rect(width/2, height/2, 40, 40);

  fill(56, 235, 190);
  noStroke();
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(30, 300, 30, 340, 20, 300);
}
