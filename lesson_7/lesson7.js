s// Напиши 4 задачи с помощью map, filter, reduce (по одной на метод):

// Получи массив только имён (используй map)
// Получи массив только взрослых (18+ лет) (используй filter)
// Получи массив только админов (используй filter)
// Посчитай средний возраст всех пользователей (используй reduce)

// Пример ответа:
// JavaScriptconst names = users.map(...)
// → ["Дима", "Вася", "Катя", "Петя", "Аня"]

const users = [
	{ name: 'Дима', age: 40, isAdmin: true },
	{ name: 'Вася', age: 25, isAdmin: false },
	{ name: 'Катя', age: 19, isAdmin: false },
	{ name: 'Петя', age: 35, isAdmin: true },
	{ name: 'Аня', age: 17, isAdmin: false },
];

const name = users.map(user => user.name);
console.log(name);
const adult = users.filter(user => user.age >= 18);
console.log(adult);
const isAdmin = users.filter(user => user.isAdmin);
console.log(isAdmin);
const medAge = users.reduce((acc, user) => acc + user.age,0);
const averageAge = medAge / users.length; 
console.log("Средний возраст:", averageAge);
