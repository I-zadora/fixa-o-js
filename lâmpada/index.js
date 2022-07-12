const btnAcender = document.querySelector('#acender').addEventListener('click',acenderLampada);
const btnApagar = document.querySelector('#apagar').addEventListener('click', apagarLampada); 
let displayImg = document.querySelector('#display');

function acenderLampada(){
    displayImg.innerHTML = `<img src = "./pic_bulbon.gif"/>`
}

function apagarLampada(){
    displayImg.innerHTML = `<img src = './pic_bulboff.gif'/>`
}