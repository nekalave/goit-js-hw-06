document.querySelector("button").addEventListener('click', () =>{
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }
  document.querySelector(".color").textContent = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
});
