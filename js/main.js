const myImgEl = document.getElementById("lamp");
const myButtonEl = document.getElementById("switch");
const mySwitchEl = document.getElementById("switch-input");

myButtonEl.addEventListener("click", () => {
  myImgEl.scr = "./img/yellow_lamp.png";
  mySwitchEl.innerHTML = "SPEGNI";
  myButtonEl.classList.toggle("btn-danger");
});
