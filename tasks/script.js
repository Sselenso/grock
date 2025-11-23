// Типы + ссылки
// Напиши функцию isObject(value), которая возвращает true только если значение — объект или массив (не примитив, не null).

function isObject(value) {
	return typeof value === 'object' && value !== null;
}
console.log(isObject({})); // true
console.log(isObject([])); // true
console.log(isObject(null)); // false ← важно!
console.log(isObject('строка')); // false
console.log(isObject(123)); // false
console.log(isObject(undefined)); // false
console.log(isObject(() => {})); //false

// this + стрелки
// Создай объект calculator с методами add, subtract, getResult (должен возвращать текущее значение).
// Метод add должен быть стрелочной функцией, а getResult — обычной. Проверь, что getResult работает, даже если потерять контекст.

const calculator = {
	value: 0,

	add: num => {
		calculator.value += num;
		return calculator;
	},

	subtract(num) {
		this.value -= num;
		return this;
	},

	getResult() {
		return this.value;
	},
};

console.log(calculator.add(10).getResult()); // 10
console.log(calculator.add(5).subtract(3).getResult()); // 12
// А теперь ЛОМАЕМ контекст:
const brokenGet = calculator.getResult;
console.log(brokenGet());

// Напиши createPasswordChecker(password), которая возвращает функцию-проверяльщик.
// Пример:const check = createPasswordChecker("secret123");
// console.log(check("secret123")); // true

// function createPasswordChecker(correctPassword) {
// 	return function (attempt) {
// 		return attempt === correctPassword;
// 	};
// }

function createPasswordChecker(correctPassword) {
	return attempt => attempt === correctPassword;
}

const checkSecret = createPasswordChecker('яЛюблюJavaScript123');

console.log(checkSecret('яЛюблюJavaScript123')); // true
console.log(checkSecret('пароль123')); // false
console.log(checkSecret('яЛюблюJavaScript123')); // true снова

// Попробуй угадать пароль — не получится!
// console.log(correctPassword); → ошибка! переменной нет снаружи

// Массивы + reduce (классика)
// Есть массив заказов:JavaScriptconst orders = [
//   { user: "Дима", amount: 500, status: "paid" },
//   { user: "Вася", amount: 300, status: "pending" },
//   { user: "Дима", amount: 700, status: "paid" },
//   { user: "Катя", amount: 400, status: "paid" }
// ];Получи объект: сколько каждый пользователь заплатил (только paid заказы).

const orders = [
	{ user: 'Дима', amount: 500, status: 'paid' },
	{ user: 'Вася', amount: 300, status: 'pending' },
	{ user: 'Дима', amount: 700, status: 'paid' },
	{ user: 'Катя', amount: 400, status: 'paid' },
];

const usersPaid = orders.reduce((acc, order) => {
	if (order.status === 'paid') {
		acc[order.user] = (acc[order.user] || 0) + order.amount;
	}
	return acc;
}, {});
console.log(usersPaid);

// Напиши функцию updateUser(user, updates), которая возвращает новый объект пользователя с обновлёнными полями (не меняя оригинал).
// Пример:const user = { name: "Дима", age: 40, city: "Москва" };
// const updated = updateUser(user, { age: 41, job: "developer" });
// → { name: "Дима", age: 41, city: "Москва", job: "developer" }

function updateUser(user, updates) {
	return { ...user, ...updates };
}

const user = { name: 'Дима', age: 40, city: 'Москва' };
const updated = updateUser(user, { age: 41, job: 'developer' }); // → { name: "Дима", age: 41, city: "Москва", job: "developer" }

console.log(user);
console.log(updated);

// async/await + обработка ошибок
// Напиши функцию getUserData(id), которая:
// Делает запрос на https://jsonplaceholder.typicode.com/users/${id}
// Возвращает объект { name, email, city }
// Если ошибка — возвращает { error: "Пользователь не найден" }

async function getUserData(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

		if (!response.ok) {
			return { error: 'Пользователь не найден' };
		}

		const user = await response.json();

		return {
			name: user.name,
			email: user.email,
			city: user.address.city,
		};
	} catch (error) {
		return { error: 'Ошибка сети' };
	}
}

getUserData(1).then(console.log);
getUserData(999).then(console.log);

