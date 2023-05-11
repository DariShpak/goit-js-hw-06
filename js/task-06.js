const inputEl = document.querySelector("input")

const minDataLength = inputEl.getAttribute("data-length")
console.log(minDataLength)

inputEl.addEventListener("blur", onBlur)

function onBlur(event) {
  if (inputEl.value.length == minDataLength) {
    inputEl.classList.add("valid")
  } else {
    inputEl.classList.add("invalid")
  }
}
