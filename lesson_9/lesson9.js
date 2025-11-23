// 1. Получить список пользователей
async function getUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		if (!response.ok) throw new Error('Сервер упал');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('Ошибка:', error.message);
	}
}

getUsers();

// 2. Получить одного пользователя по id (например id = 5)
async function getUserById(id) {	
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
		if (!response.ok) throw new Error('Сервер упал');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('Ошибка:', error.message);
	}
}

// 3. Получить всех пользователей и вывести только их имена
async function showUserNames() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		if (!response.ok) throw new Error('Сервер упал');
		const data = await response.json();
		const onlyNames = data.map(name => name.name);
		console.log(onlyNames);
	} catch (error) {
		console.log('Ошибка:', error.message);
	}
}

showUserNames();
