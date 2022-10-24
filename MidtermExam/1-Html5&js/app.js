function change() {

    //store the div properties and store in the variable word
    var word = document.getElementById("Hello");

    //test if the word is "hello"
    if(word.textContent=="Hello") {
        //if not change to "World"
        word.textContent = "World";

        //if the word is "world",
    } else {
        //change to "Hello"
        word.textContent = "Hello"
    }
}