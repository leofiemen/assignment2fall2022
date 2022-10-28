document.getElementById("button").addEventListener("click", function() {

    //stores the value of the x1 input field to the variable x1
    let x1 = document.getElementById("x1").value;

    //stores the value of the x2 input field to the variable x2
    let x2 = document.getElementById("x2").value;

    
    //stores the value of the y1  input field to the variable y1
    let y1 = document.getElementById("y1").value;

    //stores the value of the y2  input field to the variable y2
    let y2 = document.getElementById("y2").value;

    //Computes the difference between x2 and x1
    let xDiff = x2 - x1;
   

    //Computes the difference between y2 and y1
    let yDiff = y2 - y1;
   

    //Computes the distance between the two points
    let distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
   
    //Display the value of distance in the div with id distance
    document.getElementById("distance").innerHTML = "Distance is " + distance;
        
});