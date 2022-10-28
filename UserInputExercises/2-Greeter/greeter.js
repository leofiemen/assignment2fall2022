//Javascript function that is triggered when the button is clicked
document.getElementById("button").addEventListener("click", function(){

    //stores the input value of the name fiend into the variable name
    let name = document.getElementById("name").value;

    //outputs "Hello " + the name inputted  
    console.log("Hello " + name);
    
});