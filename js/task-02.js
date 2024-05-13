const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const targetUl = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(function (ingredient,){
  const createLi = document.createElement('li')
  createLi.textContent = ingredient
  createLi.classList.add('item')
  fragment.appendChild(createLi);
});
targetUl.appendChild(fragment);