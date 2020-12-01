// bounce.js


var balls;


function setup() {
    createCanvas(400, 400);
    balls = [];

    background(0);
    fill(255);
    textAlign(CENTER);
    text("Click me!", width/2, height/2);
}

function draw() {

    for (let b in balls)
        balls[b].display();
}

function mousePressed() {
    balls.push(new Ball(mouseX, mouseY));
}


class Ball
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.vx = random(-3, 3);
        this.vy = random(-3, 3);
        this.c = color(0, random(200, 255), random(150, 255));
        this.r = random(10, 50);
    }

    display()
    {
        fill(this.c);
        ellipse(this.x, this.y, this.r*2, this.r*2);

        this.x += this.vx;
        this.y += this.vy;

        if (this.x<this.r || this.x>width-this.r) this.vx *= -1;
        if (this.y<this.r || this.y>width-this.r) this.vy *= -1;
    }
}

