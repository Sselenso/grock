'use strict';

const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
};

const counter = createCounter();
const button = document.getElementById('counter');

button.addEventListener('click', () => {
  counter.increment();  
  button.textContent = `Кликни меня (${counter.getCount()})`;
});

// При клике на «Увеличить» число в этой кнопке росло на 1.
// При клике на «Уменьшить» — число в кнопке «Увеличить» уменьшалось на 1.
// Состояние (count) — приватное, через замыкание.

const createCounter2 = () => {
	let count = 0;
	return {
		increment: () => ++count,
		decrement: () => --count,
		getCount: () => count,
	};
};

const counter2 = createCounter();

const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');

incButton.addEventListener('click', () => {
	counter2.increment();
	incButton.textContent = `Увеличить (${counter2.getCount()})`;
});

decButton.addEventListener('click', () => {
	counter2.decrement();
	incButton.textContent = `Увеличить (${counter2.getCount()})`;
});

// При клике текст менялся на:
// "Тёмная тема: вкл" — если сейчас выкл,
// "Тёмная тема: выкл" — если сейчас вкл.
// Внутреннее состояние (isDarkMode: true/false) — приватное (замыкание).

const themeButton = document.getElementById('theme');

const createThemeToggle = () => {
	let isDark = false;
	return {
		toggle: () => {
			isDark = !isDark;
		},
		isDarkMode: () => isDark,
	};
};

const theme = createThemeToggle();

themeButton.addEventListener('click', () => {
	theme.toggle();
	const status = theme.isDarkMode() ? 'вкл' : 'выкл';
	themeButton.textContent = `Тёмная тема: ${status}`;
});

// Можно было нажать не больше 5 раз.
// После 5-го нажатия кнопка перестаёт реагировать (можно отключить или оставить текст как есть).
// Состояние (count, max = 5) — приватное, через замыкание.

const maxCountButton = document.getElementById('limited');

const limitButtonTask = () => {
	let count = 0;
	let max = 5;

	return {
		inc: () => {
			if (count < max) {
				++count;
			}
			return count;
		},
		isMaxReached: () => count >= max
	};
};

const limit = limitButtonTask();

maxCountButton.addEventListener('click', () => {
	const count = limit.inc();
	maxCountButton.textContent = `Нажми меня (${count}/5)`;
	if (limit.isMaxReached()) {
    maxCountButton.disabled = true; 
  }
});

// Пользователь должен нажать на кнопку ровно 3 раза.
// После каждого клика текст обновляется:
// Нажми 3 раза, чтобы разблокировать →
// Нажми ещё 2 раза... →
// Нажми ещё 1 раз... →
// ✅ Разблокировано!
// После третьего клика — кнопка больше не реагирует (можно отключить или оставить как есть).
// Состояние (clicks, max = 3) — приватное, через замыкание.

// const lockButton = document.getElementById('secret');

// const unlockSecret = () => {
// 	let count = 3;	
// 	return{
// 		dec: ()=>{
// 			if(count > 0){
// 				count --
// 			}
// 			return count;
// 		},
// 		isUnlocked: () => count === 0
// 	}
// }

// const unlock = unlockSecret();

// lockButton.addEventListener('click', ()=>{
// 	if (unlock.isUnlocked()) return;
// 	const unlockCount = unlock.dec();
// 	lockButton.textContent = `Нажми еще ${unlockCount} раза, чтобы разблокировать`;
// 	if (unlock.isUnlocked()) {
// 		lockButton.textContent = `Разблокировано`
// 		lockButton.disabled = true;
// 	}
// })

const unlockCounter = {
    count: 3,
    click() {
        if (this.count > 0) this.count--;
        return this.count;
    },
    isUnlocked() {
        return this.count === 0;
    }
};

document.getElementById('secret').addEventListener('click', function() {
    if (unlockCounter.isUnlocked()) return;
    
    const remaining = unlockCounter.click();
    
    if (unlockCounter.isUnlocked()) {
        this.textContent = 'Разблокировано';
        this.disabled = true;
    } else {
        this.textContent = `Нажми еще ${remaining} раза`;
    }
});


// При клике на «Старт» начинался обратный отсчёт от 5 до 0.
// Каждую секунду число в <div id="timer"> уменьшалось на 1.
// Когда доходит до 0 — текст меняется на "Время вышло!", и таймер останавливается.
// Нельзя запустить несколько таймеров одновременно (если уже идёт — кнопка «Старт» не реагирует).
// Всё состояние (count, isRunning, intervalId) — приватное, через замыкание.
// Нет глобальных переменных.
// Используй setInterval и clearInterval.
// 💡 Подсказка: храни intervalId внутри замыкания, чтобы можно было остановить таймер. 

const timerButton = document.getElementById('start');
const timerBlock = document.getElementById('timer');


const timerStart =() =>{
	let count = 5;
	intervalId = 1000;	
	return{
	dec: ()=>{
			if(count > 0){				
				count --
				setInterval(intervalId);
			}
			return count;
		},
	}
}

const timer = timerStart();

timerButton.addEventListener('click',()=>{
	
})


