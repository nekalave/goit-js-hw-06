const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const targetUl = document.getElementById("ingredients");

ingredients.forEach(function (ingredient,){
  const createLi = document.createElement('li')
  createLi.textContent = ingredient
  createLi.classList.add('item')
  targetUl.appendChild(createLi);
});
