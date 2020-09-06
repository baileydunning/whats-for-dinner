var sides = ['Coleslaw', 'Garlic Butter Mushrooms', 'Miso Glazed Carrots', 'Garden Salad', 'Spanish Rice', 'Chips & Salsa', 'Cheese & Crackers', 'Mashed Potatoes', 'Hummus']
var mains = ['Spaghetti & Meatballs', 'Mac & Cheese', 'Meatloaf', 'Dumplings', 'Empanadas', 'Chicken Fried Rice', 'Chili', 'Fish Tacos', 'BBQ Chicken Burgers', 'Thai Yellow Curry', 'Sesame Chicken', 'Turkey Burgers', 'Fettucini Alfredo', 'Pesto Chicken Pizza']
var desserts = ['Apple Pie', 'Black Forest Cake', 'Chocolate Chip Cookies', 'Lemon Bars', 'Red Velvet Cupcakes', 'Oatmeal Raisin Cookies', 'Banana Bread', 'Peach Cobbler']

var selects = document.querySelectorAll('.select')
var cookpot = document.querySelector('.cookpot')
var suggestionBox = document.querySelector('.suggestion-box')
var returnDishSuggestion = document.querySelector('.dish-suggestion')

var letsCookButton = document.querySelector('.lets-cook-button')
var resetButton = document.querySelector('.reset-button')
var dislikeButton = document.querySelector('.dislike-button')
var randomizeButton = document.querySelector('.randomize-button')
var addRecipeButton = document.querySelector('.add-recipe-button')
var addNewButtom = document.querySelector('.add-new-button')

var footer = document.querySelector('.footer')
var customRecipeTypeInput = document.querySelector('.custom-type')
var customRecipeInput = document.querySelector('.custom-dish')

letsCookButton.addEventListener('click', showDish)
resetButton.addEventListener('click', clearSuggestion)
// dislikeButton.addEventListener('click', dislikeDish)
randomizeButton.addEventListener('click', randomizeDish)
addRecipeButton.addEventListener('click', showFooter)
addNewButtom.addEventListener('click', addCustomDish)

for (var i = 0; i < selects.length; i++) {
  selects[i].addEventListener('input', enableLetsCookButton)
}

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function cookingTime() {
  cookpot.classList.add('hidden')
  suggestionBox.classList.remove('hidden')
  resetButton.classList.remove('hidden')
  dislikeButton.classList.remove('hidden')
  randomizeButton.classList.remove('hidden')
}

function showDish() {
  event.preventDefault()
  cookingTime()
  var side = getRandomIndex(sides)
  var main = getRandomIndex(mains)
  var dessert = getRandomIndex(desserts)
  if (selects[0].checked === true) {
    returnDishSuggestion.innerText = `${side}`
  }
  if (selects[1].checked === true) {
    returnDishSuggestion.innerText = `${main}`
  }
  if (selects[2].checked === true) {
    returnDishSuggestion.innerText = `${dessert}`
  }
  if (selects[3].checked === true) {
    returnDishSuggestion.innerText = `${main} with a side of ${side} with ${dessert} for dessert!`
  }
}

function enableLetsCookButton() {
  letsCookButton.removeAttribute('disabled')
}

function clearSuggestion() {
  cookpot.classList.remove('hidden')
  suggestionBox.classList.add('hidden')
  resetButton.classList.add('hidden')
  dislikeButton.classList.add('hidden')
  randomizeButton.classList.add('hidden')
}

function randomizeDish() {
  console.log('hello')
}

// function dislikeDish(array) {
//   for (var i = 0; i > array.length; i++) {
//     console.log(array[i])
//   }
// }

function showFooter() {
  footer.classList.remove('hidden')
}

function addCustomDish() {
  var type = customRecipeTypeInput.value.trim().toUpperCase()
  var recipe = customRecipeInput.value.charAt(0).toUpperCase() + customRecipeInput.value.slice(1)
  if (type === 'SIDE') {
    sides.push(recipe)
  } else if (type === 'MAIN') {
    mains.push(recipe)
  } else if (type === 'DESSERT' || 'DESERT') {
    desserts.push(recipe)
  } else {
    alert('Please enter a valid type of "Side", "Main", or "Dessert"')
  }
  clearUserInputs()
}

function clearUserInputs() {
  customRecipeTypeInput.value = ''
  customRecipeInput.value = ''
}

function capitalizeUserRecipe() {
  var recipe = customRecipeInput.value
  customRecipeInput.value.charAt(0).toUpperCase()
}
