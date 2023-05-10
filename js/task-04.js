

const decrBtn = document.querySelector("button[data-action='decrement']")
console.log(decrBtn.dataset.action)

const incrBtn = document.querySelector("button[data-action='increment']")
console.log(incrBtn.dataset.action)

const value = document.querySelector('#value')
console.log(value.textContent)

let counterValue = 0;

decrBtn.addEventListener("click", decrClick)
incrBtn.addEventListener("click", incrClick)

function decrClick(event) {
  counterValue -= 1
  value.textContent = counterValue
}

function incrClick(event) {
  counterValue += 1
  value.textContent = counterValue
}

