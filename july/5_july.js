'use strict';

let recipes = [];

function RecipeBook(recipe) {
  // this.recipes = [];
}

function Recipe(name) {
  this.name = name;
  this.commonName;
  this.ingredients = [];

  this.setName = (commonName) => {
    this.commonName = commonName;
  }

  this.addIngredient = (...ingredientList) => {
    ingredientList.forEach((item) => {
      this.ingredients.push(item);
    });
  }
}

let r = new Recipe('overnightOats');
r.setName('Overnight Oats');
r.addIngredient('oats', 'blueberries', 'almond milk', 'pecans');
recipes.push(r);
let r1 = new Recipe('sausageAndPeppers');
r1.setName('Sausage and Peppers');
r1.addIngredient('Sausage', 'sweet onion', 'garlic', 'olive oil', 'peppers');
recipes.push(r1);

function getIngredients(name) {
  let ingredients = []
  recipes.forEach((item) => {
    if (item.name === name) {
      ingredients = item.ingredients;
    }
  });
  return ingredients
}

console.log(getIngredients('overnightOats'));
console.log(getIngredients('sausageAndPeppers'));
