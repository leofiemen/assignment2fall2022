//Creates the loop to dipslay 1000 2000 3000 4000 5000
for (let index = 1; index <= 5; index++) {
    document.getElementById("loop").insertAdjacentText("beforeend", index * 1000 + " ");
}