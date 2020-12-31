// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    console.log(123);
}