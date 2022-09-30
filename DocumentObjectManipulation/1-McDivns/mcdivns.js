
//Stores number of clicks to the variable num_clicks
let num_clicks = 0;

//Access the div element and store in the variable mc_div
let mc_div = document.getElementById("mcdivns")


//Specify what happens when the user clicks the div element with id = mcdivns
mc_div.onclick = function() {

    //increments number of clicks by 1 when user clicks on the div
    num_clicks++;

    //If the number of clicks is less than 3, append the text "mc" to the html content of the div. 
    //Else if the number of clicks reached 3, the div content will be replaced with "divdivdiv"
    if(num_clicks < 3) {
        mc_div.innerHTML += "mc";
    } else {
        mc_div.innerHTML = "divdivdiv";
    }
}