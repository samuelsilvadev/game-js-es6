

//criando canvas 
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;

document.body.appendChild(canvas);

//carregando imagem de fundo
let bgReady = false;
const bgImage = new Image();
bgImage.addEventListener('load', () => {
	bgReady = true;
});
bgImage.src = 'imgs/background.jpg';

//carregando imagem do heroi
let heroReady = false;
const heroImage = new Image();
heroImage.addEventListener('load', () => {
	heroReady = true;
});
heroImage.src = 'imgs/hero.jpg';