
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
const input = document.querySelector("input")

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes")

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div")
    box.style.backgroundColor = getRandomHexColor()
    box.style.width = `${30 + i * 10}px`
    box.style.height = `${30 + i * 10}px`
    boxes.appendChild(box)
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes")
  boxes.innerHTML = ""
}

createBtn.addEventListener("click", () => {
  createBoxes(input.value)
})

destroyBtn.addEventListener("click", () => {
  destroyBoxes()
})



