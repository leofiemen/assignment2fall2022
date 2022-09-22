let ball

function setup() {
    createCanvas(600, 400);

    ball = new Ball(200, 200, 50, 5, 'blue'); // set the value and color of the ball inside the canvas
    
}
function draw() {

    background('white'); // set the background of the canvas to white

    drawBall(ball); // call the drawball

    ball.x+= ball.v; // make the ball move to the right 5 pixels per frame.
    
    if(ball.x > 600) {
        // reset position of the ball when it goes out of canvas
        ball.x = -20; 
    }
}

// create ball function
function Ball (x, y, d, v, color) { 
    
    // Make an object with all the properties for a graphic on the screen
    //  x, y, diameter, velocity, color,
    this.x = x; // position x
    this.y = y; // position y
    this.d = d; // diameter
    this.v = v; // velocity
    this.color = color; // fill color of the ball
}

// create drawBall function
function drawBall(ball) {

    fill(ball.color);
    circle(ball.x, ball.y, ball.d,);

}


