var sides = []
var mains = []
var desserts = []

class Dish {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  addToArray() {
    if (this.type === 'SIDE') {
      sides.push(this.name)
    }
    if (this.type === 'MAIN') {
      mains.push(this.name)
    }
    if (this.type === 'DESSERT') {
      desserts.push(this.name)
    }
  }
}

// sides
new Dish('Garlic Butter Mushrooms', 'SIDE').addToArray()
new Dish('Coleslaw', 'SIDE').addToArray()
new Dish('Miso Glazed Carrots', 'SIDE').addToArray()
new Dish('Garden Salad', 'SIDE').addToArray()
new Dish('Corn on the Cob', 'SIDE').addToArray()
new Dish('Creamed Spinach', 'SIDE').addToArray()
new Dish('Spanish Rice', 'SIDE').addToArray()
new Dish('Chips & Salsa', 'SIDE').addToArray()
new Dish('Brussel Sprouts', 'SIDE').addToArray()
new Dish('Mashed Potatoes', 'SIDE').addToArray()
new Dish('Hummus', 'SIDE').addToArray()
new Dish('Jalapeno Cornbread', 'SIDE').addToArray()
new Dish('Asian Chicken Salad', 'SIDE').addToArray()
new Dish('Beet & Walnut Salad', 'SIDE').addToArray()
new Dish('Parmesan-Crusted Roasted Potatoes', 'SIDE').addToArray()
new Dish('Potato Salad', 'SIDE').addToArray()
new Dish('Garlic Bread', 'SIDE').addToArray()
new Dish('Bacon-Wrapped Dates', 'SIDE').addToArray()
new Dish('Edamame', 'SIDE').addToArray()
new Dish('Chunky Onion Salsa', 'SIDE').addToArray()
new Dish('Garlic Green Beans', 'SIDE').addToArray()
new Dish('Asparagus', 'SIDE').addToArray()
new Dish('Baked Brie', 'SIDE').addToArray()
new Dish('Roasted Broccoli', 'SIDE').addToArray()

// mains
new Dish('Spaghetti & Meatballs', 'MAIN').addToArray()
new Dish('Mac & Cheese', 'MAIN').addToArray()
new Dish('Meatloaf', 'MAIN').addToArray()
new Dish('Dumplings', 'MAIN').addToArray()
new Dish('Empanadas', 'MAIN').addToArray()
new Dish('Chicken Fried Rice', 'MAIN').addToArray()
new Dish('Chili', 'MAIN').addToArray()
new Dish('Fish Tacos', 'MAIN').addToArray()
new Dish('BBQ Chicken Burgers', 'MAIN').addToArray()
new Dish('Pad Thai', 'MAIN').addToArray()
new Dish('Sesame Chicken', 'MAIN').addToArray()
new Dish('Turkey Burgers', 'MAIN').addToArray()
new Dish('Fettucini Alfredo', 'MAIN').addToArray()
new Dish('Pesto Chicken Pizza', 'MAIN').addToArray()
new Dish('Fajitas', 'MAIN').addToArray()
new Dish('Vegetable Stir Fry', 'MAIN').addToArray()
new Dish('Chicken Caeser Salad', 'MAIN').addToArray()
new Dish('Shepherds Pie', 'MAIN').addToArray()
new Dish('Flank Steak', 'MAIN').addToArray()
new Dish('Swordfish', 'MAIN').addToArray()
new Dish('Chicken Parmesan', 'MAIN').addToArray()
new Dish('Baked Ziti', 'MAIN').addToArray()

// desserts
new Dish('Apple Pie', 'DESSERT').addToArray()
new Dish('Black Forest Cake', 'DESSERT').addToArray()
new Dish('Chocolate Chip Cookies', 'DESSERT').addToArray()
new Dish('Red Velvet Cupcakes', 'DESSERT').addToArray()
new Dish('Lemon Bars', 'DESSERT').addToArray()
new Dish('Oatmeal Raisin Cookies', 'DESSERT').addToArray()
new Dish('Banana Bread', 'DESSERT').addToArray()
new Dish('Brownies', 'DESSERT').addToArray()
new Dish('Oreo Milkshakes', 'DESSERT').addToArray()
new Dish('Peach Cobbler', 'DESSERT').addToArray()
new Dish('Ice Cream', 'DESSERT').addToArray()
new Dish('Chocolate Strawberries', 'DESSERT').addToArray()
new Dish('Green Tea Mochi', 'DESSERT').addToArray()
new Dish('Carrot Cake', 'DESSERT').addToArray()
new Dish('Key Lime Pie', 'DESSERT').addToArray()
new Dish('Bread Pudding', 'DESSERT').addToArray()
new Dish('Hot Fudge Sundae', 'DESSERT').addToArray()
new Dish('Cannoli', 'DESSERT').addToArray()
