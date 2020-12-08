function setup() {
  createCanvas(400, 400);
}

function draw() {
  strokeWeight(5);
  background(221, 157, 242);

  point(width / 2 - 20, height / 2 - 20);
  point(width / 2 + 20, height / 2 - 20);

  point(width / 2, height / 2);

  point(220, 220);
  point(180, 220);
}
