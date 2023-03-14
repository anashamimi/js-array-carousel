/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

//Creazione array immagini
const images = [
    './consegna/img/01.webp',
    './consegna/img/02.webp',
    './consegna/img/03.webp',
    './consegna/img/04.webp',
    './consegna/img/05.webp'
];

const slider = document.querySelector('.slider');

const asideSlider = document.querySelector('.aside-slider');

let currentIndex = 0;
let slides = '';
let asideSlides = '';
for (let i = 0; i < images.length; i++) {
    slides += `<div class="slide">
        <img src="${images[i]}" alt="videgame ${i}">
        </div>`;
}

for (let i = 0; i < images.length; i++) {
    asideSlides += `<div class="mini-img">
    <img src="${images[i]}" alt="videgame ${i}"></div>`;
}

slider.innerHTML += slides;

asideSlider.innerHTML += asideSlides

document.querySelectorAll('.slide')[currentIndex].classList.add('active');
document.querySelectorAll('.mini-img')[currentIndex].classList.add('img-selected');

const up = document.getElementById('up');
const down = document.getElementById('down');

up.addEventListener('click', goUp);

function goDown() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.mini-img')[currentIndex].classList.remove('img-selected');
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.mini-img')[currentIndex].classList.add('img-selected');
}

down.addEventListener('click', goDown);

function goUp() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.mini-img')[currentIndex].classList.remove('img-selected');
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.mini-img')[currentIndex].classList.add('img-selected');
}