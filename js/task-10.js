let initSize = 30
document.querySelector("[data-create]").addEventListener('click', () => {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    }
    let counter = 0;
    const targetDiv = document.getElementById("boxes");
    do {
        const createDiv = document.createElement('div')
        createDiv.style.backgroundColor = getRandomHexColor();
        createDiv.style.width = initSize + 'px';
        createDiv.style.height = initSize + 'px';
        createDiv.classList.add('box');
        targetDiv.appendChild(createDiv);
        initSize += 10;
        counter += 1;
    }
    while (counter < document.querySelector("input").value)
});

document.querySelector("[data-destroy]").addEventListener('click', () => {
    const allBoxesArr = document.querySelectorAll('.box')
    for (let i = 0; i < allBoxesArr.length; i++) {
        const allBoxes = document.querySelector('.box')
        allBoxes.remove()
    }
    initSize = 30;
});

document.querySelector("input").addEventListener("blur", (event) => {
    if (event.currentTarget.value < 0) {
        event.currentTarget.value = 0

    } else if (event.currentTarget.value > 100) {
        event.currentTarget.value = 100
    }
});
