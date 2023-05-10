const inputEl = document.querySelector("input")
console.log(inputEl.value)

const nameOutput = document.querySelector("#name-output")
console.log(nameOutput.textContent)

inputEl.addEventListener("input", onInput)

function onInput(event) {
  if (inputEl.value.trim() === "") {
    nameOutput.textContent = "Anonymous"
  } else {
    nameOutput.textContent = inputEl.value
  }
}
