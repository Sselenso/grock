'use strict';

const input = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const clearBtn = document.getElementById('clear');
const timer = document.getElementById('timer');
stopBtn.disabled = true;

function timerFunction() {
	let value = 0;
	return{

		decrementTimer: () =>{

		},
		pauseTimer: () =>{

		}

	}
}

const timerInit = timerFunction();

startBtn.addEventListener('click', () => {
	const text = input.value;
	if (text === '') return;

	console.log(text);

	// timer.decrementTimer(text);
	stopBtn.disabled = false;
	startBtn.disabled = true;

	input.value = '';
	input.disabled = true;
});

stopBtn.addEventListener('click', () => {
	timerInit.pauseTimer();
	startBtn.disabled = false;
	stopBtn.disabled = true;
	
});

clearBtn.addEventListener('click', ()=>{
	input.disabled = false;
	input.focus();
})
