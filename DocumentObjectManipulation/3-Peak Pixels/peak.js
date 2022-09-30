// Specifies what happens when the user clicks the div element with id = peak_pixels
function increaseSize() {

    //Access the div element and store in a variable named element
    var element = document.getElementById('peak_pixels');

    // Stores the element's width to the variable named element_width
    var element_width =  element.offsetWidth;

    // Stores the element's height to the variable named element_height
    var element_height =  element.offsetHeight;

    //Applying the changes to the element's width; Add 10% increase or 0.1 * element_width + "px"
    element.style.width = element_width + 0.1 * element_width + "px";

    //Applying the changes to the element's height; Add 10% increase or 0.1 * element_height + "px"
    element.style.height = element_height + 0.1 * element_height + "px";

}