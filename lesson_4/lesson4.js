// 1. Обычная функция, которая складывает два числа
function sum(a, b) {
	return a + b;
}

// 2. Стрелочная функция, которая умножает два числа
const multiply = (a, b) => {
	return a * b;
};

// 3. Стрелочная функция, которая возвращает строку "Привет, [имя]!"
const sayHi = name => {
	return `Привет ${name}`;
};

// 4. Обычная функция, которая выводит в консоль "Я родился в [год]"
function born(year) {
	return console.log(`Я родился в ${year}`);
}

console.log(sum(5, 3));
console.log(multiply(4, 7));
console.log(sayHi('Дима'));
born(1985);
