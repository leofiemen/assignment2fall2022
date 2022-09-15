
function setup() {

    createCanvas(400, 300);
    
}

function draw() {
    background(255);

    car(mouseX, mouseY);
    

}
function car(x, y) {

    fill(50, 98, 168)
    rect(20 + x, 50 + y, 100, 30);
    fill(255)
    quad(30 + x, 25 + y, 75 + x, 25 + y, 75 + x, 50 + y, 30 + x, 50 + y);
    
    fill(0)
    circle(40 + x, 80 + y, 20)
    circle(100 +x, 80 + y, 20)

}