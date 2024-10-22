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

  if ((myImageEl.src = "./img/yellow_lamp.png")) {
    myImageEl.src = "./img/white_lamp.png";
  }

  myButtonEl.classList.toggle("btn-danger");
  if (mySwitchEl.innerHTML.includes("ACCENDI")) {
    mySwitchEl.innerHTML = "SPEGNI";
  } else if (mySwitchEl.innerHTML.includes("SPEGNI")) {
    mySwitchEl.innerHTML = "ACCENDI";
  }
});
