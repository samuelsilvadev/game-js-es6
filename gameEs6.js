

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
heroImage.src = 'imgs/hero.png';

//carregando imagem do monstro
let monsterReady = false;
const monsterImage = new Image();
monsterImage.addEventListener('load', () => {
	monsterReady = true;
});
monsterImage.src = 'imgs/monster.png';

//criando objetos
const hero = {
	speed:256
};
const monster = {};

//contador de monstros pegos
let monstersCaught = 0;

//começando a manupular eventos
const keysDown = {};

window.addEventListener('keydown', (e) => {
	keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', (e) => {
	delete keysDown[e.keyCode];
}, false);

// parte que volta os estados do jogo quando o heroi pega o monstro
const reset = function(){
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	monster.x = 32 + (Math.random() * (canvas.width - 64))
	monster.y = 32 + (Math.random() * (canvas.height - 64))
}

//função que ira atualizar os objetos do jogo
const updateObjects = function(modifier){
	if(38 in keysDown){//seta para cima
		hero.y -= hero.speed * modifier;
	}
	if(38 in keysDown){//seta para baixo
		hero.y += hero.speed * modifier;
	}
	if(37 in keysDown){//seta para esquerda
		hero.x -= hero.speed * modifier;
	}
	if(39 in keysDown){//seta para direita
		hero.x += hero.speed * modifier;
	}
	verifyObjectsSamePosition();
}

const verifyObjectsSamePosition = function(){
	if(
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	){
		++monstersCaught;
		reset();
	}
}