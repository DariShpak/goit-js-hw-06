const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
]

const ingredientItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li")
  listItem.textContent = ingredient
  listItem.classList.add("item")
  return listItem
})

const listOfIngredients = document.querySelector("ul#ingredients")
listOfIngredients.append(...ingredientItems)

