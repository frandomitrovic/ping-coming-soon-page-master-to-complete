const email = document.getElementById('email');
const form = document.getElementById('email-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = e.value.trim();

    checkEmail(emailValue);
});

function checkEmail(emailValue) {
    if (emailValue === "") {
        setErrorFor(email, "Email field cannot be empty");
    } else {
        if (!isEmailValid(emailValue)) {
            setErrorFor(email, "Please provide a valid email address");
        } else {
            setSuccessFor(email);
        }
    }
}

function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const grandParent = formControl.parentElement;

    const small = grandParent.querySelector('small');

    formControl.className = 'email-form error';
    small.innerText = message;
}

function setSuiccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'email-form success';
}