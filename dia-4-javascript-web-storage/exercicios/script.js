let buttonBG = document.querySelector('.buttonBG');
let buttonColor = document.querySelector('.buttonColor');
let buttonFontSize = document.querySelector('.buttonFontSize');
let buttonLine = document.querySelector('.buttonLineHeigth');
let buttonFontFamily = document.querySelector('.buttonFontFamily');
let cor = 'gray';

buttonBG.addEventListener('click', setBG(cor));
buttonColor.addEventListener('click', setColor);
buttonFontSize.addEventListener('click', setFontSize);
buttonLine.addEventListener('click', setLineHeigth);
buttonFontFamily.addEventListener('click', setFontFamily);

function setBG(cor) {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'gray';
}

function setColor(cor){
    let p = document.querySelectorAll('p');

    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        element.style.color = 'white';
    }
}

function setFontSize(){
    let p = document.querySelectorAll('p');

    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        element.style.fontSize = '30px';
    }
}
function setLineHeigth(){
    let p = document.querySelectorAll('p');

    for (let index = 0; index < p.length; index++) {
        const element = p[index];
        element.style.fontSize = '30px';
    }
}

function setFontFamily(){

}