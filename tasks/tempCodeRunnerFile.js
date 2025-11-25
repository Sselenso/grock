
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