const body = document.querySelector("body")
const bgColorName = document.querySelector(".color")

const changeColorBtn = document.querySelector(".change-color")
changeColorBtn.addEventListener("click", onBtnClick)

function onBtnClick() {
  const colorHex = getRandomHexColor()
  body.style.backgroundColor = colorHex
  bgColorName.textContent = colorHex
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}
