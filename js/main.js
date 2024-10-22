const myImgEl = document.getElementById("lamp");
const myButtonEl = document.getElementById("switch");
const mySwitchEl = document.getElementById("switch-input");

myButtonEl.addEventListener("click", () => {
  mySwitchEl.innerHTML = "SPEGNI";
  myButtonEl.classList.toggle("btn-danger");
});
