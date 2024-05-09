const output = document.querySelector("#name-output");

document.querySelector("#name-input").addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === ''){
        output.textContent = 'Anonymous'
    } else {
        output.textContent = event.currentTarget.value;
    }
});