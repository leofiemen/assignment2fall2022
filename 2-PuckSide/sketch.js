let diameter = 50;

function setup(){
    createCanvas(400, 300);
}

function draw(){

    background(255);

    // width is built-in variable of P5.js
    if(mouseX < width / 2)
        fill('blue');
    else
        fill('red');
    
     circle(mouseX, mouseY, diameter);
     text('mouseX: ' + mouseX, 10, 10);
     text('mouseY: ' + mouseY, 10, 30);


}