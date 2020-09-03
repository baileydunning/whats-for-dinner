var sideDish = ["Coleslaw", "Garlic Butter Mushrooms"]
var mainDish = ["Spaghetti & Meatballs", "Thai Yellow Curry"]
var dessert = ["Apple Pie", "Black Forest Cake"]

var letsCookButton = document.querySelector('.lets-cook-button')
var cookpot = document.querySelector('.cookpot')

letsCookButton.addEventListener('click', showDish)

function showDish() {
  event.preventDefault()
  cookpot.classList.add('hidden')
}
