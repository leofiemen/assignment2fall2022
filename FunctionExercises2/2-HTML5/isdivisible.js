function isDivisible() {

    // Grab the number inputted and store it in the variable number
    let number = document.getElementById("input").value;

    //Grab the div that will display the result and store in the variable message
    let message = document.getElementById("display");

    //Test if the number is divisible is 7
    if(number%7 == 0) {
        //If true, displays the message that it is divisible by 7 and returns true
        message.innerText = "The number is divisible by 7";
        return true;
        
    } else {
        //If false, displays the message that it is not divisible by  and returns false
        message.innerText = "The number is NOT divisible by 7";
        return false;
    }
}