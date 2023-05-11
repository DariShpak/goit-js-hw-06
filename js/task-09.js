const body = document.querySelector("body")
const bgColorName = document.querySelector(".color")

const changeColorBtn = document.querySelector(".change-color")
changeColorBtn.addEventListener("click", onBtnClick)

function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor()
  bgColorName.textContent = getRandomHexColor()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}
