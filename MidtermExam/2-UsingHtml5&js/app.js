function divide() {
//access the div properties and stores into a variable
var element = document.getElementById("number");

//store the content of the div into the variable number
number = element.textContent;

//converts the string into a number
number = parseInt(number);

//divide the number by two
number = number/2;

//updates the element content to the divided number
element.textContent = number;
}
