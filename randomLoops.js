function setup() {
  var x;
  var y;
  var w;
  var r;
  var g;
  var b;
  var a;
  var c;

  background(255);
  createCanvas(400, 400);
  noStroke();

  for(var i = 0; i < 20; i++){
    x = random(width);
    y = random(width);
    w = random(10, 100);
    r = random(255);
    g = random(255);
    b = random(255);
    a = random(100, 200);
    c = random(5, 10);
    fill(r, g, b, a);
    rect(x, y, w, w, c);

  }

}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  c = random(5, 10);
  a = random(100, 200);
  fill(r, g, b, a);
  rect(0, 0, 10, height);
  rect(0, 0, width, 10);
  rect(width - 10, 0, 10, height);
  rect(0, height - 10, width, 10);
}
