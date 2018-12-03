const form = document.querySelector('.js-user');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentUser';
const SHOW = 'showing';

function printGreeting(text){
	form.classList.remove(SHOW);
	greeting.classList.add(SHOW);
	greeting.innerText = `Hello ${text}`;
}

function saveUser(text){
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
	event.preventDefault();
	const user = input.value;
	printGreeting(user);
	saveUser(user);
}

function askUser(){
	form.classList.add(SHOW);
	form.addEventListener('submit', handleSubmit);
}

function getUser(){
	const currentUser = localStorage.getItem(USER_LS);

	if( currentUser === null ){
		askUser();
	} else {
		printGreeting(currentUser);
	}
}

function init(){
	getUser();
}

init();