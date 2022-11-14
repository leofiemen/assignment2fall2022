function calculate() {
    //grab the input value and store in the variable input
    const input = document.getElementById("input").value;

    // Splits that list into an array of numbers
    const input_array = input.split(",");

    //  Converts the string version of the numbers into number versions
    const number_array = input_array.map(function(s) {
        return parseInt(s);
    });

    let sum = 0;

    //Loops through the array and sums up the values
    for (let index = 0; index < number_array.length; index++) {
        sum += number_array[index];
    }

    //Calculates the average of the array

    let average = sum/number_array.length;

    //Displays the sum of the number
    document.getElementById("sum").innerText = "The sum of the numbers is " + sum;

    //Displays the average of the numbers
    document.getElementById("average").innerText = "The average of the numbers is " + average;

    //Removes the text from the input so the user can type in new numbers
    document.getElementById("input").value = " ";

}
