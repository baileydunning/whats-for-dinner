var sideDish = ['Coleslaw', 'Garlic Butter Mushrooms']
var mainDish = ['Spaghetti & Meatballs', 'Thai Yellow Curry']
var dessert = ['Apple Pie', 'Black Forest Cake']

var cookpot = document.querySelector('.cookpot')
var suggestionBox = document.querySelector('.suggestion-box')
var returnDishSuggestion = document.querySelector('.dish-suggestion')
var letsCookButton = document.querySelector('.lets-cook-button')

letsCookButton.addEventListener('click', showDish)

function showDish() {
  event.preventDefault()
  cookpot.classList.add('hidden')
  suggestionBox.classList.remove('hidden')
  returnDishSuggestion.innerText = "DELICIOUSNESS"
}

// function getRandomIndex(array) {
//   var randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }
