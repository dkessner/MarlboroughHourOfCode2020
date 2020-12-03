function setup(){
  //pick two colors that you want to create a gradient with
  var one = color(2, 183, 45);
  var two = color(8, 156, 252);
  var between = lerpColor(one, two, 0.5);
  var segments = 100;

  createCanvas(400, 400);
  background(one);

  noStroke();
  fill(two);
  rect(width/2, 0, width/2, height/2);

  fill(between);
  rect(150, 0, 200, height);

  for(var i = 0; i < segments; i++){
    fill(lerpColor(one, two, i/segments));
    rect(i*width/segments, 0, width/ segments, height);
  }
}
