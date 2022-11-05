function generateRandom() {

    //Math.random() returns a random number between 0 and 1
    //Math.random()*10 returns a random number between 0 and 10
    //Rounds off number to whole number. Generates a whole number between 0 and 10
    random_number = Math.round(Math.random()*10);
    

    //Grabs the div to display the number and set its content to the random number
    document.getElementById("display").innerText = random_number;
    
}