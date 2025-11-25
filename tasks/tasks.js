// 1. 5 переменных с const (которые никогда не меняются)
// 2. 3 переменные с let (которые будут меняться)
// 3. Попробуй переприсвоить const — и покажи ошибку в комментарии

// === 5 переменных const (никогда не меняются) ===
const myName = 'Dima';
const mySex = 'male';
const myBirthday = '27.03.1985'; // ← строка!
const currentYear = 2025;
const daysInWeek = 7;

// === 3 переменные let (могут меняться) ===
let age = 40;
let isStudent = false;
let score = 0;

// === Попытка переприсвоить const (ошибка!) ===
myName = 'Вася'; // ← TypeError: Assignment to constant variable
// mySex = "female"; // ← тоже ошибка!

// Напиши функцию whatType(value), которая возвращает строку с типом значения:
function whatType(value) {
	if (value === null) {
		return 'null';
	}
	if (Array.isArray(value)) {
		return 'array';
	}
	return typeof value;
}

// Все тесты проходят!
console.log(whatType('hello')); // "string"
console.log(whatType(42)); // "number"
console.log(whatType(true)); // "boolean"
console.log(whatType({})); // "object"
console.log(whatType([])); // "array"
console.log(whatType(null)); // "null"
console.log(whatType(undefined)); // "undefined"
console.log(whatType(() => {})); // "function"

function sum(a, b) {
	return a + b;
}

let sum = (a, b) => a + b;
console.log(sum(4, 5));

function greet(name) {
	return 'Привет, ' + name;
}

let greet = name => `Привет, ${name}`;

console.log(greet('Дима'));

function square(x) {
	return x * x;
}

let square = x => x * x;

console.log(square(4));

function isPositive(num) {
	return num > 0;
}

let isPositive = num => num > 0;

console.log(isPositive(3));

function logMessage() {
	console.log('Я работаю!');
}

let logMessage = () => console.log('Я работаю');

logMessage();

// Создай объект counter, у которого будет:

// Свойство value = 0
// Метод add(num) — прибавляет число
// Метод get() — возвращает текущее значение
// Оба метода — стрелочные, чтобы this всегда работал

// Пример использования:
// JavaScriptcounter.add(10);
// counter.add(5);
// console.log(counter.get()); // 15
const counter = {
	value: 0,
	add: num => {
		counter.value += num;
	},
	get: () => counter.value,
};

counter.add(10);
counter.add(5);
console.log(counter.get()); // 15

// Напиши функцию createCounter(), которая возвращает объект с тремя методами:

// increment() — прибавляет 1
// decrement() — отнимает 1
// get() — возвращает текущее значение

// Всё должно работать без глобальных переменных — только замыкание!

function createCounter() {
	let value = 0;

	return {
		increment: () => (value += 1),
		decrement: () => (value -= 1),
		get: () => value,
	};
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
console.log(counter1.get()); // 2

counter2.decrement();
console.log(counter2.get()); // -1

// Используя только map, создай новый массив, где каждое число умножено на 10.
// Результат должен быть: [10, 20, 30, 40, 50]

const numbers1 = [1, 2, 3, 4, 5];
const double = numbers.map(num => num * 10);
console.log(double);

// Используя только filter, оставь только чётные числа.
// Результат должен быть: [2, 4, 6, 8, 10]

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// Используя только reduce, посчитай сумму всех чисел.
// Результат должен быть: 150

const numbers = [10, 20, 30, 40, 50];
const summary = numbers.reduce((acc, num) => acc + num, 0);
console.log(summary);

// Используя map + деструктуризацию, создай новый массив строк:

// ["Дима из Москва", "Катя из Питер", "Вася из Казань"]

const users = [
	{ name: 'Дима', age: 40, city: 'Москва' },
	{ name: 'Катя', age: 25, city: 'Питер' },
	{ name: 'Вася', age: 35, city: 'Казань' },
];

const destructionUsers = users.map(({ name, city }) => `${name} из ${city}`);
console.log(destructionUsers);

// Напиши функцию getUserName(id), которая:

// Делает запрос на https://jsonplaceholder.typicode.com/users/${id}
// Возвращает только имя пользователя
// Если ошибка — возвращает строку "Пользователь не найден"

// Пример использования:

async function getUserName(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if (!response.ok) throw new Error(`Пользователь не найден`);
		const data = await response.json();
		return data.name;
	} catch (error) {
		console.log(`Ошибка:`, error.message);
	}
}
getUserName(1).then(name => console.log(name)); // "Leanne Graham"
getUserName(999).then(name => console.log(name)); // "Пользователь не найден"
