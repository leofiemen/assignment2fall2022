function checkBad() {
            
    //grab the input value and store in the variable input
    const input = document.getElementById("input").value;

    //Splits the string on spaces
    const input_array = input.split(" ");

    //initialize count, list of bad words and non bad words;
    let count = 0;
    //initializes stores list of bad words
    let bad = " ";
    //initialize and stores list of non bad words
    let not_bad = " ";
    

    if(input_array.includes("water")) {
        bad += "water ";
        count++
    } 
    
    if(input_array.includes("clear")) {
        bad += "clear ";
        count++
    }
    

    if(input_array.includes("tires")) {
        bad += "tires ";
        count++
    }

    
    document.getElementById("bad").innerText = "The list of bad words found is/are " + bad + ".";

    //outputs list of none bad words
    document.getElementById("not_bad").innerText = "The list of none bad words found is/are " + not_bad + ".";

    //Output count of bad words
    document.getElementById("total").innerText = "The number of bad words found is " + count + ".";

    //Clears out the text field so the user can input a new string
    document.getElementById("input").value = "";

}