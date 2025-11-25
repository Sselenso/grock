// Напиши функцию createSmartCounter(), которая возвращает объект:
// JavaScriptconst counter = createSmartCounter();

// counter.add(10);
// counter.add(5);
// counter.subtract(3);
// counter.add(7);

// console.log(counter.get());        // 19
// console.log(counter.getHistory()); // ["+10", "+5", "-3", "+7"]
// console.log(counter.getHistory().length); // 4
// Требования (обязательно все):

// Переменная value и history — приватные (через замыкание)
// Все методы — стрелочные функции
// При добавлении в историю — новый массив (через spread)
// Нельзя использовать this
// Нельзя использовать глобальные переменные

function createSmartCounter() {
	let value = 0;
	const history = [];

	return {
		add: num => {
			value += num;
			history.push(`+${num}`);
		},
		subtract: num => {
			value -= num;
			history.push(`-${num}`);
		},
		get: () => value,
		getHistory: () => [...history],
	};
}

// === ТЕСТ ===
const counter = createSmartCounter();

counter.add(10);
counter.add(5);
counter.subtract(3);
counter.add(7);

console.log(counter.get()); // 19
console.log(counter.getHistory()); // ["+10", "+5", "-3", "+7"]
console.log(counter.getHistory().length); // 4

// Сделай одним выражением (chain):

// Оставь только взрослых (18+)
// Оставь только админов
// Преобразуй в строки: "Дима (админ)"

const users = [
	{ name: 'Дима', age: 40, isAdmin: true },
	{ name: 'Катя', age: 17, isAdmin: false },
	{ name: 'Вася', age: 35, isAdmin: true },
	{ name: 'Аня', age: 22, isAdmin: false },
];

const formatUsers = users
	.filter(user => user.age > 18)
	.filter(user => user.isAdmin)
	.map(user => `${user.name} (админ)`);

console.log(formatUsers);

// Напиши функцию createCart(), которая возвращает объект корзины:
// Всё через замыкание
// getTotal() — через reduce
// Нельзя использовать this
// Все методы — стрелочные

function createCart() {
	let items = [];

	return {
		add: (name, price) => {
			items.push({ name, price });
		},

		getTotal: () => {
			return items.reduce((acc, item) => acc + item.price, 0);
		},
		getItems: () => items.map(item => item.name),
		getCount: () => items.length,
	};
}

const cart = createCart();

cart.add('iPhone', 1200);
cart.add('MacBook', 2500);
cart.add('AirPods', 250);

console.log(cart.getTotal()); // 3950
console.log(cart.getItems()); // ["iPhone", "MacBook", "AirPods"]
console.log(cart.getCount()); // 3

// Напиши функцию createTodoList(), которая возвращает объект с четырьмя методами:

// add(text) — добавляет новую задачу (по умолчанию completed: false)
// complete(text) — находит задачу по тексту и помечает как выполненную (completed: true)
// getActive() — возвращает массив строк с текстами невыполненных задач
// getCompletedCount() — возвращает число завершённых задач
// ❗ Никаких глобальных переменных! Только замыкание.
// ❗ Храни задачи как массив объектов: { text: "...", completed: true/false }

function createTodoList() {
	let tasks = [];

	return {
		add: text => {
			tasks.push({ text, completed: false });
		},
		complete: text => {
			const task = tasks.find(t => t.text === text);
			if (task) {
				task.completed = true;
			}
		},
		getActive: () => {
			return tasks.filter(task => !task.completed).map(task => task.text);
		},
		getCompletedCount: () => {
			return tasks.filter(task => task.completed).length;
		},
	};
}

const todo = createTodoList();

todo.add('Купить хлеб');
todo.add('Починить ноутбук');
todo.add('Позвонить маме');

todo.complete('Купить хлеб');

console.log(todo.getActive());
// → ["Починить ноутбук", "Позвонить маме"]

console.log(todo.getCompletedCount());
// → 1

// Напиши функцию createCounter(start), которая возвращает объект с одним методом:

// next() — возвращает следующее число (начинает с start, потом start + 1, start + 2, и т.д.)
// ❗ Никаких глобальных переменных. Используй замыкание.

function createCounter(start) {
	let counter = start;
	return {
		next: () => {
			return counter++;
		},
	};
}

const counter = createCounter(10);
console.log(counter.next()); // 10
console.log(counter.next()); // 11
console.log(counter.next()); // 12

// Напиши функцию createStorage(), которая возвращает объект с двумя методами:

// save(value) — сохраняет значение
// load() — возвращает последнее сохранённое значение (или null, если ничего не сохраняли)

function createStorage() {
	let storage = null;
	return {
		save: value => {
			storage = value;
		},
		load: () => {
			return storage;
		},
	};
}

const storage = createStorage();
console.log(storage.load()); // null

storage.save('Привет');
console.log(storage.load()); // "Привет"

storage.save(42);
console.log(storage.load()); // 42

// Напиши функцию createSecret(secret), которая возвращает объект с одним методом:

// reveal() — возвращает строку "Секрет: " + secret
// ❗ После создания secret нельзя прочитать извне — только через reveal().

function createSecret(secret) {
	return {
		reveal: () => {
			return `Секрет: ${secret}`;
		},
	};
}

const mySecret = createSecret('JavaScript — крут!');
console.log(mySecret.reveal()); // "Секрет: JavaScript — крут!"
console.log(mySecret.secret); // undefined (или вообще нет такого свойства)

// 🎯 Задача 1: Профиль пользователя
// Напиши функцию createProfile(name), которая создаёт личный профиль с возможностью:

// менять имя,
// получать текущее имя,
// знать, менялось ли имя хотя бы раз.
// Методы:

// getName() → возвращает текущее имя,
// setName(newName) → устанавливает новое имя,
// hasChanged() → возвращает true, если имя меняли хотя бы раз (изначальное задание не считается!).
function createProfile(name) {
	let profile = { name: name, hasChanged: false };

	return {
		getName: () => profile.name,

		setName: newName => {
			profile.name = newName;
			profile.hasChanged = true;
		},

		hasChanged: () => profile.hasChanged,
	};
}

const profile = createProfile('Дима');

console.log(profile.getName()); // "Дима"
console.log(profile.hasChanged()); // false

profile.setName('Дмитрий');
console.log(profile.getName()); // "Дмитрий"
console.log(profile.hasChanged()); // true

profile.setName('Димон');
console.log(profile.getName());
console.log(profile.hasChanged()); // true (остаётся true навсегда)

// Напиши функцию createToggle(initialState), которая создаёт переключатель (как галочка: вкл/выкл).

// Методы:

// toggle() → переключает состояние на противоположное и возвращает новое состояние,
// getState() → возвращает текущее состояние (true или false).
// 💡 initialState — начальное значение (true или false).

function createToggle(initialState) {
	let state = initialState;

	return {
		toggle: () => (state = !state),
		getState: () => state,
	};
}

const light = createToggle(false); // изначально выключено

console.log(light.getState()); // false
console.log(light.toggle()); // true  (включили)
console.log(light.toggle()); // false (выключили)
console.log(light.getState()); // false

// Напиши функцию createShoppingList(), которая возвращает объект с четырьмя методами:

// addItem(name, price)
// — добавляет товар в список.
// — каждый товар: { name: "...", price: число, bought: false }
// buyItem(name)
// — находит товар по имени и помечает bought: true
// — если товара нет — ничего не делает
// getTotalCost()
// — возвращает общую стоимость всех товаров (и купленных, и нет)
// getRemainingCost()
// — возвращает сумму цен НЕкупленных товаров

function createShoppingList() {
	let shoppingList = [];

	return {
		addItem: (name, price) => {
			shoppingList.push({ name, price, bought: false });
		},
		buyItem: name => {
			const buyItem = shoppingList.find(t => t.name === name);

			if (buyItem) {
				buyItem.bought = true;
			}
		},
		getTotalCost: () => {
			return shoppingList.reduce((sum, cost) => sum + cost.price, 0);
		},
		getRemainingCost: () => {
			return shoppingList.filter(item => !item.bought).reduce((sum, cost) => sum + cost.price, 0);
		},
	};
}

const list = createShoppingList();

list.addItem('Хлеб', 50);
list.addItem('Молоко', 80);
list.addItem('Сыр', 300);

console.log(list.getTotalCost()); // 430
console.log(list.getRemainingCost()); // 430

list.buyItem('Хлеб');
list.buyItem('Сыр');

console.log(list.getRemainingCost()); // 80 (только молоко не куплено)
console.log(list.getTotalCost()); // 430 (общая сумма не меняется)

// Напиши функцию getUserInfo(id), которая:

// Делает запрос на https://jsonplaceholder.typicode.com/users/${id}
// Если всё ок — возвращает объект:
// { name, email, city }
// Если ошибка (404 или сеть) — возвращает:
// { error: "Не удалось загрузить пользователя" }

// Используй:

// async/await
// try/catch
// Деструктуризацию при возврате

async function getUserInfo(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if (!response.ok) throw new Error(`Не удалось загрузить пользователя`);
		const data = await response.json();
		const {
			name,
			email,
			address: { city },
		} = data;
		return { name, email, city };
	} catch (error) {
		console.log(`Ошибка`, error.message);
	}
}

getUserInfo(1).then(console.log);
getUserInfo(999).then(console.log);

// Напиши функцию getPostInfo(id), которая:

// Делает запрос на:
// https://jsonplaceholder.typicode.com/posts/${id}
// Если всё успешно — возвращает объект:

// { title, body, userId }
// Если ошибка (404, сеть и т.д.) — возвращает: { error: "Не удалось загрузить пост" }

async function getPostInfo(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		if (!response.ok) throw new Error(`Не удалось загрузить пост`);
		const data = await response.json();
		const { title, body, userId } = data;
		return { title, body, userId };
	} catch (error) {
		return { error: 'Не удалось загрузить пост' };
	}
}

getPostInfo(1).then(console.log);
// → { title: "...", body: "...", userId: 1 }

getPostInfo(9999).then(console.log);
// → { error: "Не удалось загрузить пост" }

// Напиши функцию createTaskManager(), которая возвращает объект с одним методом:

// loadUserTasks(userId)
// Этот метод:

// Загружает пользователя по userId с https://jsonplaceholder.typicode.com/users/${userId}
// Загружает все задачи (todos) этого пользователя с https://jsonplaceholder.typicode.com/todos?userId=${userId}
// Если всё успешно — возвращает объект
// {
//   name: "Имя пользователя",
//   city: "Город",
//   activeTasks: ["Задача 1", "Задача 2", ...]  // только НЕ выполненные
// }

// Если любая ошибка (пользователь не найден, нет сети и т.д.) — возвращает:
// { error: "Не удалось загрузить данные" }

function createTaskManager() {
	return {
		loadUserTasks: async userId => {
			try {
				const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
				if (!userRes.ok) throw new Error('Не удалось загрузить данные');
				const user = await userRes.json();

				const todosRes = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
				if (!todosRes.ok) throw new Error('Не удалось загрузить данные');
				const todos = await todosRes.json();

				const {
					name,
					address: { city },
				} = user;

				const activeTasks = todos.filter(task => !task.completed).map(task => task.title);

				return { name, city, activeTasks };
			} catch (error) {
				return { error: 'Не удалось загрузить данные' };
			}
		},
	};
}

const taskManager = createTaskManager();

taskManager.loadUserTasks(1).then(console.log);
// →
// {
//   name: "Leanne Graham",
//   city: "Gwenborough",
//   activeTasks: [
//     "delectus reiciendis ...",
//     "doloribus at sed ...",
//     ...
//   ]
// }

taskManager.loadUserTasks(999).then(console.log);
// → { error: "Не удалось загрузить данные" }



// Напиши функцию createPostViewer(), которая возвращает объект с одним методом:

// getPostWithAuthor(postId)
// Этот метод:

// Загружает пост по postId с:
// https://jsonplaceholder.typicode.com/posts/${postId}
// Из этого поста берёт userId
// Загружает автора (пользователя) по userId с:
// https://jsonplaceholder.typicode.com/users/${userId}

// Если всё успешно — возвращает объект

// {
//   postTitle: "Заголовок поста",
//   postBody: "Текст поста",
//   authorName: "Имя автора",
//   authorEmail: "email@author.com"
// }