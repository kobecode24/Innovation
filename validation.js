let formcCont = document.querySelector(".contact-form");
let nameCont = document.querySelector(".Cname");
let emailCont = document.querySelector(".Cemail");
let textarea = document.querySelector(".Ctext");

const Regexname = /^[a-zA-Z]+\s+[a-zA-Z]+$/;
const Regexemails = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Fixed regex
const Regexsaytext = /\b(\w+\b\W*){50,}/; // Regex for 50 words

formcCont.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameCont.value;
    const email = emailCont.value;
    const text = textarea.value;

    if (Regexname.test(name)) {
        nameCont.nextElementSibling.style.display = 'none';
    } else {
        nameCont.nextElementSibling.style.display = 'block';
    }

    if (Regexemails.test(email)) {
        emailCont.nextElementSibling.style.display = 'none'; // Fixed target element
    } else {
        emailCont.nextElementSibling.style.display = 'block'; // Fixed target element
    }

    if (Regexsaytext.test(text)) {
        textarea.nextElementSibling.style.display = 'none'; // Fixed target element
    } else {
        textarea.nextElementSibling.style.display = 'block'; // Fixed target element
    }
});

document.querySelectorAll('.faq-toggle').forEach((event) => {
    event.addEventListener('click', () => {
        if (event.classList.contains('active')) {
            event.classList.remove('active');
        } else {
            event.classList.add('active');
        }
    });
});

