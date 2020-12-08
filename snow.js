class Flake {

  //constructor function
  //initializes the flake object
  //you can add parameters to the constructor
  constructor(x, y, vy) {
    this.x = x;
    this.y = y;
    this.vy = vy;

  }

  drawFlake() {
    //increment y
    this.y = this.y + this.vy;

    //check boundaries
    if (this.y > height) {
      this.y = 0;
    }
    //draw the flake at x and y
    noStroke();
    fill(245, 243, 235, 200);
    ellipse(this.x, this.y, 15, 15);
  }
}

//declaring an array of type named 'snow'
let snow;

function setup() {
  createCanvas(400, 400);

  //initialize the snow array, it's empty right now
  snow = [];

  //for loop repeats specified number of times
  //fills the snow array with 100 Flake objects
  for (let i = 0; i < 100; i++) {
    snow[i] = new Flake(int(random(width)), int(random(-height)), int(random(2, 7)));

  }
}

function draw() {
  background(143, 224, 240);

  //draw each flake in the snow array
  for (let i = 0; i < snow.length; i++) {
    snow[i].drawFlake();
  }

  //INSERT YOUR OWN DRAWING HERE
  //drawing
}
