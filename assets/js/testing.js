let toggle = document.querySelector(".toggle");
let toggleText = document.querySelector(".toggle-text").innerHTML;
let body = document.querySelector("body");
let circ = document.querySelector(".toggle-circ");
let img = document.querySelector(".diagram");
let toggleCount = 0;
//if body.background color = white
toggle.addEventListener("click", toggleMode);
function toggleMode(){
    let findMode = document.querySelector(".section").style.backgroundColor;
    console.log(findMode);
    if (findMode == ""){
        toggleCount += 1;
        body.style.backgroundColor = "#121212";
        body.style.color = "white";
        toggleText = document.querySelector(".toggle-text");
        toggleText.innerHTML = "Light Mode"
        circ.style.left = "50px";
        img.src = "assets/images/diagramDark.png";
    }
    else if (toggleText == "Light Mode"){
        toggleCount -= 1;
        body.style.backgroundColor = "white";
        body.style.color = "black";
        toggleText = document.querySelector(".toggle-text");
        toggleText.innerHTML = "Dark Mode"
        circ.style.left = "5px";
        img.src = "assets/images/diagramLight.png";
    }
};

// You can make the toggle so there is only 1 Option, "dark mode". 
// then change the color of the background whenever it toggles on