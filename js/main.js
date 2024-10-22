const myFigureEl = document.getElementById("lamps");
const myImageEl = document.createElement("img");
const myButtonEl = document.getElementById("switch");
const mySwitchEl = document.getElementById("switch-input");

myFigureEl.append(myImageEl);
myImageEl.src = "./img/white_lamp.png";
myImageEl.className = "img-fluid d-block";
myImageEl.alt = "white-lamp";

myButtonEl.addEventListener("click", () => {
  myImageEl.src = "./img/yellow_lamp.png";
  mySwitchEl.innerHTML = "SPEGNI";

  if (myImageEl.src.includes("yellow_lamp.png")) {
    myImageEl.src = "./img/white_lamp.png";
    mySwitchEl.innerHTML = "ACCENDI";
  } else {
    myImageEl.src = "./img/yellow_lamp.png";
    mySwitchEl.innerHTML = "SPEGNI";
  }

  myButtonEl.classList.toggle("btn-danger");
});
