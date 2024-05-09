let counterValue = 0;

document.querySelector('button[data-action="decrement"]').addEventListener('click', function () {
    counterValue -= 1
    document.getElementById('value').innerText = counterValue;
});

document.querySelector('button[data-action="increment"]').addEventListener('click', function () {
    counterValue += 1
    document.getElementById('value').innerText = counterValue;
});

