document.querySelector("button").addEventListener('click', () =>{
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
  }
  let color = getRandomHexColor();
  document.querySelector(".color").textContent = color;
  document.querySelector("body").style.backgroundColor = color;
});
