const formReg = document.querySelector(".login-form")

formReg.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
});
