const toggleButton = document.querySelector('.toggle-button');
const nav = document.querySelector('header nav ul');

toggleButton.addEventListener('click', () => {
    // console.log("button is working");
    nav.classList.toggle('active');
})