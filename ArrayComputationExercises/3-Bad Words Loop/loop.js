function checkBad() {
            
    //grab the input value and store in the variable input
    const input = document.getElementById("input").value;

    //Splits the string on spaces
    const input_array = input.split(" ");

    //initialize count, list of bad words and non bad words;
    let count = 0;
    //initializes stores list of bad words
    let bad = "";
    //initialize and stores list of non bad words
    let not_bad = "";
    

    //Loops through  the array 
    for (let index = 0; index < input_array.length; index++) {
        const word = input_array[index];
        //check for bad words
        if( word == "clear" | word == "water" |word == "tires") {
            // Adds 1 to a tally count when a bad word is found
            count++;
            bad = word + " " + bad;
        } else {
            not_bad = word + " " + not_bad;
        }
        
    }

    //outputs list of bad words
    document.getElementById("bad").innerText = "The list of bad words found is/are " + bad + ".";

    //outputs list of none bad words
    document.getElementById("not_bad").innerText = "The list of none bad words found is/are " + not_bad + ".";

    //Output count of bad words
    document.getElementById("total").innerText = "The number of bad words found is " + count + ".";

    //Clears out the text field so the user can input a new string
    document.getElementById("input").value = "";

}