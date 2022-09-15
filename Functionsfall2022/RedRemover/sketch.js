
function setup() {

    createCanvas(400, 300);
    
}

function draw() {

    background(255);
    // takes a color as an argument 
    // ( you can use color(170, 200, 150) )
    let c1 = color(212, 62, 32);

    let noRed = removeRed(c1);

    // test this function by drawing 
    // a circle to the screen using the result.
    fill(noRed);
    circle(100, 100, 100);
    

}

function removeRed(c) {

    // sets the red component of that color to zero
    c.setRed(0);

    // Returns that new color without red
    return c;
}