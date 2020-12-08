var x, y, vx, vy, s, c, gameState;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  vx = 5;
  vy = 3;
  s = 0;
  c = color(random(255), random(255), random(255));
  gameState = 0;
}

function draw() {
  if (gameState == 0) {
    background(255);
    textSize(36);
    textAlign(CENTER);
    text("Click to Start", width / 2, height / 2);
  }
  if (gameState == 1) {
    background(255);
    x = x + vx;
    y = y + vy;
    noStroke();
    fill(c);
    ellipse(x, y, 50, 50);
    textSize(36);
    textAlign(RIGHT);
    text(s, width - 5, 36);
    if (x > width || x < 0) {
      vx = vx * -1;
      c = color(random(255), random(255), random(255));
    }
    if (y > height || y < 0) {
      vy = vy * -1;
      c = color(random(255), random(255), random(255));
    }
  }
  if (gameState == 2) {
    background(255);
    textSize(36);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 3);
    text("You scored " + s, width / 2, height / 2);
    textSize(24);
    text("Click to Play Again", width / 2, height * 2 / 3);
  }
}

function mousePressed() {
  if (gameState == 0) {
    gameState = 1;
  } else if (gameState == 1 && dist(x, y, mouseX, mouseY) < 50) {
    s++;
  } else if (gameState == 1 && dist(x, y, mouseX, mouseY) > 50) {
    gameState = 2;
  } else if (gameState == 2) {
    gameState = 0;
    s = 0;
    x = width / 2;
    y = height / 2;
  }
}
