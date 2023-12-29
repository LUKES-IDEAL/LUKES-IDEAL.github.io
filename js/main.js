wKeydown = false;
sKeydown = false;
aKeydown = false;
dKeydown = false;

document.getElementById("log").innerHTML = "wazzup beijing"


//document.getElementById("player").style.left = "500px";




document.body.addEventListener("keydown", (event) => {
    keyUp = event.key;
    //document.getElementById("log").innerHTML = key;

    movementLoop(key); 
});

document.body.addEventListener("keyup", (event) => {
    keyUp = event.key;
});

function movementLoop(key) {
    switch (key) {
        case "w":
            wKeydown = true;
            break;
        case "s":
            sKeydown = true;
            break;
        case "a":
            aKeydown = true;
            break;
        case "d":
            dKeydown = true;
            break;
        default:
            document.getElementById("log").innerHTML = "key defaulted";
            break;
    }
}