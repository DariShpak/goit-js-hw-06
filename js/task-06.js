const inputEl = document.querySelector("input")

const minDataLength = Number(inputEl.getAttribute("data-length"))

inputEl.addEventListener("blur", onBlur)

function onBlur(event) {
  const outputLength = event.currentTarget.value.trim().length
  console.log(outputLength)

  if (outputLength === minDataLength) {
    console.log(minDataLength)
    inputEl.classList.add("valid")
     inputEl.classList.remove("invalid")
  } else {
    inputEl.classList.add("invalid")
    inputEl.classList.remove("valid")
  } 
}
