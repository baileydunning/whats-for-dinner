var sideDishes = ['Coleslaw']
var mainDishes = ['Spaghetti & Meatballs', 'Mac & Cheese', 'Meatloaf', 'Dumplings', 'Empanadas', 'Chicken Fried Rice', 'Chili', 'Fish Tacos', 'BBQ Chicken Burgers', 'Thai Yellow Curry', 'Sesame Chicken', 'Turkey Burgers', 'Fettucini Alfredo', 'Pesto Chicken Pizza']
var desserts = ['Apple Pie', 'Black Forest Cake', 'Chocolate Chip Cookies', 'Lemon Bars', 'Red Velvet Cupcakes', 'Oatmeal Raisin Cookies', 'Banana Bread', 'Peach Cobbler']

// 'Garlic Butter Mushrooms', 'Miso Glazed Carrots', 'Garden Salad', 'Spanish Rice', 'Chips & Salsa', 'Cheese & Crackers', 'Mashed Potatoes', 'Hummus'

var selects = document.querySelectorAll('.select')
var cookpot = document.querySelector('.cookpot')
var suggestionBox = document.querySelector('.suggestion-box')
var returnDishSuggestion = document.querySelector('.dish-suggestion')
var letsCookButton = document.querySelector('.lets-cook-button')
var clearButton = document.querySelector('.clear-button')
var addRecipeButton = document.querySelector('.add-recipe-button')
var addNewButtom = document.querySelector('.add-new-button')
var footer = document.querySelector('.footer')
var customRecipeTypeInput = document.querySelector('.custom-type')
var customRecipeInput = document.querySelector('.custom-dish')

letsCookButton.addEventListener('click', showDish)
clearButton.addEventListener('click', clearSuggestion)
addRecipeButton.addEventListener('click', showFooter)
addNewButtom.addEventListener('click', addCustomDish)

for (var i = 0; i < selects.length - 1; i++) {
  selects[i].addEventListener('input', enableLetsCookButton)
}

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function cookingTime() {
  cookpot.classList.add('hidden')
  suggestionBox.classList.remove('hidden')
  clearButton.classList.remove('hidden')
}

function showDish() {
  event.preventDefault()
  cookingTime()
  var sideDish = getRandomIndex(sideDishes)
  var mainDish = getRandomIndex(mainDishes)
  var dessert = getRandomIndex(desserts)
  if (selects[0].checked === true) {
    returnDishSuggestion.innerText = `${sideDish}`
  }
  if (selects[1].checked === true) {
    returnDishSuggestion.innerText = `${mainDish}`
  }
  if (selects[2].checked === true) {
    returnDishSuggestion.innerText = `${dessert}`
  }
  if (selects[3].checked === true) {
    returnDishSuggestion.innerText = `${mainDish} with a side of ${sideDish} with ${dessert} for dessert!`
  }
}

function enableLetsCookButton() {
  letsCookButton.removeAttribute('disabled')
}

function clearSuggestion() {
  cookpot.classList.remove('hidden')
  suggestionBox.classList.add('hidden')
  clearButton.classList.add('hidden')
}

function showFooter() {
  footer.classList.remove('hidden')
}

function addCustomDish() {
  var type = customRecipeTypeInput.value.trim().toUpperCase()
  if (type === 'SIDE') {
    sideDishes.push(customRecipeInput.value);
  } else if (type === 'MAIN') {
    mainDishes.push(customRecipeInput.value);
  } else if (type === 'DESSERT') {
    desserts.push(customRecipeInput.value);
  } else {
    alert('Please enter a valid type of "Side", "Main", or "Dessert"')
  }
  clearUserInputs()
}

function clearUserInputs() {
  customRecipeTypeInput.value = ''
  customRecipeInput.value = ''
}
