//recursion is when a variable calls itself

function setup() {
  createCanvas(600, 600);
  background(255);
  translate(width / 2, height / 2);
  drawCircle(0, 0, 150);
  drawRect(0, 0, 150);
}

function draw() {}

function drawCircle(x, y, w) {
  if (w > 4) {
    drawCircle(x + w / 2 + w / 4, y, w / 2);
    drawCircle(x - w / 2 - w / 4, y, w / 2);
    drawCircle(x, y + w / 2 + w / 4, w / 2);
    drawCircle(x, y - w / 2 - w / 4, w / 2);
    //rotate(0.1);
  }
  fill(w, 0, w * 2);
  ellipse(x, y, w, w);
}

function drawRect(x, y, w) {
  if (w > 4) {
    drawRect(x + w / 2 + w / 4, y, w / 2);
    drawRect(x - w / 2 - w / 4, y, w / 2);
    drawRect(x, y + w / 2 + w / 4, w / 2);
    drawRect(x, y + w / 2 - w / 4, w / 2);
    rotate(0.5);
  }
  fill(0, w * 2, w, w * 3);
  rect(x, y, w, w);
}
