const menuItemsByClass = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItemsByClass.length}`)


const titleList = document.querySelectorAll("h2");
titleList.forEach(function (number,) {
    const numberOfUlChildren = number.nextElementSibling.children.length
    console.log(`Category:${number.textContent} \nElements: ${numberOfUlChildren}`);
});
