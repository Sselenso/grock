'use strict';

const counterFirst = document.getElementById('counter1');
const counterSecond = document.getElementById('counter2');

const createCounter = () => {
	let count = 0;
	return {
		inc: () => ++count,
		getCount: () => count,
	};
};

const counter1 = createCounter();
const counter2 = createCounter();

counterFirst.addEventListener('click', () => {
  const newCount = counter1.inc();
  counterFirst.textContent = `Счётчик 1 (${newCount})`;
});

counterSecond.addEventListener('click', () => {
  const newCount = counter2.inc();
  counterSecond.textContent = `Счётчик 2 (${newCount})`;
});

