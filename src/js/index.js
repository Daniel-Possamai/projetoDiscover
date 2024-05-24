let btnTheme = document.getElementById('switch');
let meuHtml = document.querySelector('html');
let profileImg = document.querySelector('#profile img');

meuHtml.classList.toggle('light');

btnTheme.addEventListener('click', () => {
    meuHtml.classList.toggle('light');

    if(meuHtml.classList.contains('light')){
        profileImg.src = './src/images/imgPerson.png';
    }else{
        profileImg.src = './src/images/personlighht.png'
    }
});

