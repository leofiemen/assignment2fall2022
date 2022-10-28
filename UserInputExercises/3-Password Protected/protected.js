 //Javascript function that is triggered when the button is clicked
 document.getElementById("button").addEventListener("click", function() {

    //stores the value of the username input field in the variable username
    let username = document.getElementById("username").value;
    //stores the value of the password input field in the variable password
    let password = document.getElementById("password").value;
    //stores the object properties of the div with an id result
    let result = document.getElementById("result");
    
    //tests if the username and password field input value are "Username" and "Password" respectively
    if(username == "Username" && password == "Password") {
        //set the text of the div with id result to display "Success" if true
        result.innerText = "Success";
    }else {
        //set the text of the div with id  result to display "Wrong Information" if false 
        result.innerText = "Wrong Information";
    }

});
