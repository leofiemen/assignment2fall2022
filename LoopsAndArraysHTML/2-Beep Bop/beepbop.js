for (let index = 1; index <= 25; index++) {

    //if number is divisible by 3 and 5, writes beepbop to the div
    if (index % 3 == 0 && index % 5 == 0){
        document.getElementById("beep_bop").insertAdjacentText("beforeend", "beepbop" + " ");
    //if number is divisible by 3, writes beep to the div
    }else if (index % 3 == 0) {
        document.getElementById("beep_bop").insertAdjacentText("beforeend", "beep" + " ");
    //if number is divisible by 5, writes bop to the div
    }else if (index % 5 == 0) {
        document.getElementById("beep_bop").insertAdjacentText("beforeend",  "bop" + " ");
    //if not divisible by 3 or 5, writes the number to the div
    }else{
        document.getElementById("beep_bop").insertAdjacentText("beforeend", index + " ");
    }

}