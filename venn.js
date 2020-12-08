//venn.js

function setup() {
  createCanvas(400, 400);

}

function draw() {

  let z = width / 2;
  let x = width / 2;
  let y = height / 2 + height / 8;
  let r = width / 20;
  background(255);
  noStroke();

  fill(240, 80);

  for (var i = 0; i < width / r; i++) {
    rect(2 * i * r, 0, r, height);
  }

  fill(220, 80);
  triangle(0, 0, 3 * r, 0, 0, 3 * r);
  triangle(width, 0, width - 3 * r, 0, width, 3 * r);
  triangle(0, width, 0, height - 3 * r, 3 * r, height);
  triangle(width, height, width, height - 3 * r, width - 3 * r, height);

  fill(255, 0, 0, 80);
  ellipse(x, y - z / 2, z, z);
  fill(0, 0, 255, 80);
  ellipse(x - z / 3, y, z, z);
  fill(0, 255, 0, 80);
  ellipse(x + z / 3, y, z, z);


}
