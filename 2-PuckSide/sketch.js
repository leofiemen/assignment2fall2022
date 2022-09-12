let diameter = 50; // set variable diameter = 50

function setup(){
    createCanvas(400, 300); //create canvas 400px width and 300px heigth
}

function draw(){

    background(255); //set barckground

    // width is built-in variable of P5.js
    if(mouseX < width / 2) //simple conditional statement
        fill('blue');
    else
        fill('red');
    
     circle(mouseX, mouseY, diameter);
     text('mouseX: ' + mouseX, 10, 10); //to display the X axis in the canvas when the mouse move
     text('mouseY: ' + mouseY, 10, 30); //to display the Y axis in the canvas when the mouse move


}