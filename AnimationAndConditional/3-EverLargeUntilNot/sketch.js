let diameter = 1 //set variable variable diameter with a value 1

function setup() {
    createCanvas(400, 200); //create canvas 400px width and 300px heigth
}



function draw() {
    
    // set background color to white
    background(255); 

    // 1. Make circle appear in center and not move
    circle(width / 2, height / 2, diameter)

    // 2. Increase diameter on every frame 
    diameter++;

    text('diameter: ' + diameter, 10, 20);

    // 3. Reset diameter back to once when it is more than 200
    if (diameter > 200)
        diameter = 1;
        
    

}


