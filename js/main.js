const myFigureEl = document.getElementById("lamps");
const myImageEl = document.createElement("img");
const myButtonEl = document.getElementById("switch");
const mySwitchEl = document.getElementById("switch-input");

myFigureEl.append(myImageEl);
myImageEl.src = "./img/white_lamp.png";
myImageEl.className = "img-fluid";

myButtonEl.addEventListener("click", () => {
  myImgEl.scr = "./img/yellow_lamp.png";
  mySwitchEl.innerHTML = "SPEGNI";
  myButtonEl.classList.toggle("btn-danger");
});
