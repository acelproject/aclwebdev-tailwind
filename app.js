const body = document.querySelector('html');
const btnDarkMode = document.querySelector('#toggle');

btnDarkMode.addEventListener('click', ()=>{
    body.classList.toggle('dark')
})
