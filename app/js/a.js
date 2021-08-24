const btnHamburger = document.querySelector('#btnHamburger');
const html = document.querySelector('html');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const fadeElems= document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');
    if(header.classList.contains('open')){
        header.classList.remove('open');
        html.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');   
            element.classList.add('fade-out');     
        });
    }

    else{
    html.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
        element.classList.remove('fade-out'); 
        element.classList.add('fade-in');  
    });
    }

});


// Email validation
function validateEmail(email) {
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

// Form validation
const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.querySelector('input[name="email"]');

subscribeForm.addEventListener('submit', (e) => {
e.preventDefault();
if (!validateEmail(emailInput.value)) {
    emailInput.classList.add('error');
    emailInput.nextElementSibling.classList.remove('hide');
} else {
    emailInput.value = '';
}
});

emailInput.addEventListener('focus', () => {
emailInput.classList.remove('error');
emailInput.nextElementSibling.classList.add('hide');
});