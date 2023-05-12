const list = document.querySelectorAll(".item")
console.log(`Number of categories: ${list.length}`)

list.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`)
})

