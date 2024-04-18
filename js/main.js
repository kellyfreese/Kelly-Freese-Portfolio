const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('header nav ul');

toggleButton.addEventListener('click', () => {

    nav.classList.toggle('active');
})