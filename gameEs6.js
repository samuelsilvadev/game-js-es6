

//criando canvas 
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;

document.body.appendChild(canvas);

//carregando imagem
let bgReady = false;
const bgImage = new Image();
bgImage.addEventListener('load', () => {
	bgReady = true;
});
bgImage.src = 'imgs/background.jpg';
