let btnTheme = document.getElementById('switch');
let meuHtml = document.querySelector('html');

meuHtml.classList.toggle('light');

btnTheme.addEventListener('click', () => {
    meuHtml.classList.toggle('light');
})