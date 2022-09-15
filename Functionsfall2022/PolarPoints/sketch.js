
function setup() {

    createCanvas(400, 300);
    
}

function draw() {

  
    // Set a variable (perhaps res) equal to 
    // the result of calling polarPoint() in 
    // your draw call
    let res = polarPoint(50);

    // Add a translate(100,100); line before your drawing methods
    translate(100,100);

    // Draw a circle at res.x, res.y, and with a radius of 10.
    // (res is technically an 'object', which we will learn more 
    // about next week)
    circle(res.x, res.y, 10);

}

function polarPoint(r) { // Add one argument to polar point (r)


    // In the polar point function, create an x variable and set it 
    // to r * Math.sin(mouseX);
    let x = r * Math.sin(mouseX)

    // Create a Y variable, set it to the result of 
    // r * Math.cos(mouseX);
    let y = r * Math.cos(mouseX)

    // Finally, at the end of the function, 
    // write return createVector(x,y); 
    return createVector(x,y);

}
