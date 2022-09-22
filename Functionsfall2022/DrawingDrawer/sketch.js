
function setup() {

    createCanvas(400, 300);
    
}

function draw() {
    background(255);

    car(mouseX, mouseY);
    

}
//Move that composition code into a new function ("draw car()")
function car(x, y) {

    fill(50, 98, 168)
    //Add two arguments to the function (x and y)
    rect(20 + x, 50 + y, 100, 30);
    fill(255)
    //Add two arguments to the function (x and y)
    quad(30 + x, 25 + y, 75 + x, 25 + y, 75 + x, 50 + y, 30 + x, 50 + y);
    
    fill(0)
    //Add two arguments to the function (x and y)
    circle(40 + x, 80 + y, 20)
    circle(100 +x, 80 + y, 20)

}