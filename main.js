var sideDish = ["Coleslaw", "Garlic Butter Mushrooms"]
var mainDish = ["Spaghetti & Meatballs", "Thai Yellow Curry"]
var dessert = ["Apple Pie", "Black Forest Cake"]

var cookpot = document.querySelector('.cookpot')
var suggestion = document.querySelector('.suggestion')
var letsCookButton = document.querySelector('.lets-cook-button')

letsCookButton.addEventListener('click', showDish)

function showDish() {
  event.preventDefault()
  cookpot.classList.add('hidden')
  suggestion.classList.remove('hidden')
}
