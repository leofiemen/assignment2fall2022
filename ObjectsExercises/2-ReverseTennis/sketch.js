let player1;
let player2;

function setup() {
    createCanvas(600, 400);

    //Create two objects with properties for the x, y, 
    //width, and height for a 'tall' rectangle
    player1 = new Player(10, 100, 50, 200); //Set their 'x' properties so that when 
    //drawn, one will appear on the left side of the composition, 
    //and the other on the right side.
    player2 = new Player(540, 100, 50, 200);
    
}
function draw() {

    background('brown');
    //draw both of the rectangles in the objects to the 
    //screen, based on their properties
    drawPlayer(player1);
    drawPlayer(player2);

    if (keyIsDown(UP_ARROW)) {
        //change properties
        //if the up key is pressed, make the first object 
        //move up, and the second object move down
        player1.y--
        player2.y++
      }

    
      if (keyIsDown(DOWN_ARROW)) {
        //change properties
        //if the down key is pressed, make the first object 
        //move down, and the other object move up
        player1.y++
        player2.y--
      }
}

function Player(x, y, width, height){
    //  x, y, width, and height
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

}


function drawPlayer(player) {

    // draw rect for player object
    //fill(player.color);
    rect(player.x, player.y, player.width, player.height);
}
