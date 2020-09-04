var sideDishes = ['Coleslaw', 'Garlic Butter Mushrooms', 'Miso Glazed Carrots', 'Garden Salad', 'Spanish Rice', 'Chips & Salsa', 'Cheese & Crackers', 'Mashed Potatoes', 'Hummus']
var mainDishes = ['Spaghetti & Meatballs', 'Mac & Cheese', 'Dumplings', 'Empanadas', 'Chicken Fried Rice', 'BLT', 'Chili', 'Fish Tacos', 'BBQ Chicken Burgers', 'Thai Yellow Curry', 'Sesame Chicken', 'Turkey Burgers', 'Fettucini Alfredo', 'Pesto Chicken Pizza']
var desserts = ['Apple Pie', 'Black Forest Cake', 'Chocolate Chip Cookies', 'Lemon Bars', 'Red Velvet Cupcakes', 'Oatmeal Raisin Cookies', 'Banana Bread', 'Peach Cobbler']

var cookpot = document.querySelector('.cookpot')
var suggestionBox = document.querySelector('.suggestion-box')
var returnDishSuggestion = document.querySelector('.dish-suggestion')
var letsCookButton = document.querySelector('.lets-cook-button')
var choice = document.querySelectorAll('.dish-type')

letsCookButton.addEventListener('click', showDish)

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function cookingTime() {
  cookpot.classList.add('hidden')
  suggestionBox.classList.remove('hidden')
}

function showDish() {
  event.preventDefault()
  cookingTime()
  chooseMealType()
}

function chooseMealType() {
  if (document.getElementById('sideDish').checked === true) {
    showSideDish()
  }
  if (document.getElementById('mainDish').checked === true) {
    showMainDish()
  }
  if (document.getElementById('dessert').checked === true) {
    showDessert()
  }
}

function showSideDish() {
  var sideDish = getRandomIndex(sideDishes)
  returnDishSuggestion.innerText = `${sideDish}`
}

function showMainDish() {
  var mainDish = getRandomIndex(mainDishes)
  returnDishSuggestion.innerText = `${mainDish}`
}

function showDessert() {
  var dessert = getRandomIndex(desserts)
  returnDishSuggestion.innerText = `${dessert}`
}
