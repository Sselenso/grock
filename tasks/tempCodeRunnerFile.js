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