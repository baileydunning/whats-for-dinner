var sideDishes = ['Coleslaw', 'Garlic Butter Mushrooms', 'Spanish Rice', 'Chips & Salsa', 'Cheese & Crackers']
var mainDishes = ['Spaghetti & Meatballs', 'Mac & Cheese', 'Dumplings', 'Garden Salad', 'BLT', 'Chili', 'Fish Tacos', 'Thai Yellow Curry', 'Sesame Chicken', 'Turkey Burgers', 'Fettucini Alfredo']
var desserts = ['Apple Pie', 'Black Forest Cake', 'Chocolate Chip Cookies', 'Lemon Bars', 'Red Velvet Cupcakes']

var cookpot = document.querySelector('.cookpot')
var suggestionBox = document.querySelector('.suggestion-box')
var returnDishSuggestion = document.querySelector('.dish-suggestion')
var letsCookButton = document.querySelector('.lets-cook-button')

letsCookButton.addEventListener('click', showDish)

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function showDish() {
  event.preventDefault()
  cookpot.classList.add('hidden')
  suggestionBox.classList.remove('hidden')
  showSideDish()
  returnDishSuggestion.innerText = `${sideDish}`
}
function showSideDish() {
  var sideDish = getRandomIndex(sideDishes);
}
