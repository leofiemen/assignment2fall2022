let red
let blue

function setup() {
    createCanvas(600, 400);

    // create new train object with initial properties
    // tempName, tempDistance, x, y, w, h, color
    red = new Train("Red Line", 600, 100, 100, 200, 30, 'red');
    blue = new Train("Blue Line", 120, 130, 150, 200, 30, 'blue');

}
function draw() {

    background('white');
    
    // In your create or draw function draw that object to the screen
    // using the data in your object
    drawTrain(red);
    drawTrain(blue);

    red.x++; // move train along x-axis to right side
    
    if(red.x > red.distance) {
        // reset position of train when it goes out of canvas
        red.x = -200; 
    }


}


function Train (name, distance, x, y, w, h, color) { 
    this.name = name; // name is just for information
    this.distance = distance; // how far train goes
    
    // Make an object with all the properties for a graphic on the screen
    //  - width, height, color, position
    this.x = x; // position x
    this.y = y; // position y
    this.w = w; // width
    this.h = h; // height
    this.color = color; // fill color of train
}


// The, create a function that takes one argument and draws an object to
// the screen using that object argument. Pass your object to that 
// function as an argument, and have the function draw the object to the
// screen.

function drawTrain(train) {

    // Try to not hard-code any numbers in the drawing commands - 
    // only use the object properties to set sizes, colors, or position.
    fill(train.color);
    rect(train.x, train.y, train.w, train.h);

}
