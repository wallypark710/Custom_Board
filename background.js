const body = document.querySelector('body');
const title = document.querySelector('.js-greeting');

const BG1 = 'bgImg';
const BG2 = 'bgImg2';
const HIDE_BG = 'hideImage';


function loadImage(){
	const image1 = new Image();
	const image2 = new Image();

	image1.src = `./Image/bgImg.png`;
	image2.src = `./Image/switchImg.png`;

	image1.classList.add(BG1);
	image2.classList.add(BG2);
	
	image2.classList.add(HIDE_BG);

	body.appendChild(image2);
	body.appendChild(image1);
}

function handleClick(){
	const img = document.querySelector('img');

	img.classList.toggle(HIDE_BG);
}

function init(){
	loadImage();
	title.addEventListener('click', handleClick);

}

init();