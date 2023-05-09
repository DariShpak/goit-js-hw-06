const list = document.querySelectorAll(".item")
console.log(`Number of categories: ${list.length}`)


const listCategories = list.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.getElementsByTagName('li').length}`)
})

