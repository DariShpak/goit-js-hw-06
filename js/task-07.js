const fontSizeControl = document.querySelector("#font-size-control")

const outputText = document.querySelector("#text")

const minRange = fontSizeControl.getAttribute("min")
console.log(minRange)

const value = fontSizeControl.setAttribute("value", minRange)

fontSizeControl.addEventListener("input", onRange)

function onRange() {
  outputText.style.fontSize = fontSizeControl.value + "px"
}
