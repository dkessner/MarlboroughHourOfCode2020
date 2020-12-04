var gameState = 0;
var x, y, r, g, b, w, t;
function setup() {
  x = width/2;
  y = height/2;
  r = 10;
  g = 20;
  b = 50;
  w = 50;
  createCanvas(400, 400);

}

function draw() {
  if (gameState == 0) {
    //green
    background(68, 212, 152);
  }else if(gameState == 1){
    //pink
    background(255, 148, 248);
  }else if(gameState == 2){
    //blue
    background(120, 221, 255);
  }
  fill(r, g, b);
  ellipse(x, y, w, w);
  noStroke();
  r = x;
  b = y;
  g = x/y;


}

function keyPressed(){
  if(keyCode == 32){
    if (gameState < 2){
      gameState++;
    }else{
      gameState = 0;
    }
  }
  //up
  if(keyCode == 38){
  y = y-w;
  }
  //down
  if(keyCode == 40){
   y = y + w;
  }
  //left
  if(keyCode == 37){
  x = x - w;
  }
  //right
  if(keyCode == 39){
  x = x + w;
  }

}
