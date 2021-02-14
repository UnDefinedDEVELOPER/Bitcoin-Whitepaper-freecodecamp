const button = document.querySelector("#burgerMenu");
const nav = document.querySelector("#nav-menu");

button.addEventListener('click', function() {
     nav.classList.toggle('visible');
   });