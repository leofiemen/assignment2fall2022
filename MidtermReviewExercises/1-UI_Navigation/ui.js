function makeChanges(id) {
    //Store properties of the clicked_box div
    var display_box = document.getElementById("display_box");
    //loop through all 6 divs
    for (let index = 1; index <= 6; index++) {
      
        //Stores Properties of a box div
        var box = document.getElementById(index);

        //test if the id of the clicked/chosen div is equal to the div from iteration
        if(id == index) {
            //if true, add the click_properties class to the chosen div
            //which essentially highlight the div by changing its background color and making the text bold
            box.classList.add("click_properties");
            //adds the clicked div's text into a seperate div at the top of the screen
            display_box.innerText = box.innerText;
        }else{
            //removes the bold/background highlight from any other divs
            box.classList.remove("click_properties");
        }
        
    }
}