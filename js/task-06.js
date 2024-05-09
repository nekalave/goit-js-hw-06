const input = document.querySelector("#validation-input")
const check = input.getAttribute('data-length')

input.addEventListener("blur", (event) => {
 if (event.currentTarget.value.length < check){
     input.classList.remove('valid')
     input.classList.add('invalid')
 } else  {
     input.classList.remove('invalid')
     input.classList.add('valid')
 }
});
