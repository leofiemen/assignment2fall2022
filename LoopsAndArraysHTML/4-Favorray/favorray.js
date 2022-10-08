
//Creates an array of five of my favorite things
var fav = ["Cat", "Dog", "Burger", "Vacation", "Basketball" ];

//Stores the string ", is one of my favorite things.<br>" to the variable phrase
var phrase = ", is one of my favorite things.<br>"; 

//Loops through the fav array and attach each element to phrase
for (let index = 0; index < fav.length; index++) {
    document.getElementById("favorray").insertAdjacentHTML("beforeend", fav[index] + phrase);
}