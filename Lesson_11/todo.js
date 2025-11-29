'use strict';

// const input = document.getElementById('task-input');
// const button = document.getElementById('add-btn');
// const list = document.getElementById('task-list');

// button.addEventListener('click', () => {
// 	const text = input.value.trim();

// 	if (text === '') {
// 		alert('Напиши хоть что-нибудь!');
// 		return;
// 	}

// 	const li = document.createElement('li');
// 	li.textContent = text;
// 	li.className = 'task-item';

// 	const deleteBtn = document.createElement('button');
// 	deleteBtn.textContent = '×';
// 	deleteBtn.className = 'delete';

// 	deleteBtn.addEventListener('click', () => {
// 		li.remove();
// 	});

// 	const checkbox = document.createElement('input');
// 	checkbox.type = 'checkbox';

// 	checkbox.addEventListener('click', () => {
// 		li.classList.toggle('done');
// 	});

// 	li.appendChild(checkbox);
// 	li.appendChild(deleteBtn);
// 	list.appendChild(li);

// 	input.value = '';
// 	input.focus();
// });

// const clearAllBtn = document.getElementById('clear-all');
// const clearDoneBtn = document.getElementById('clear-done');

// clearAllBtn.addEventListener('click', () => {
// 	document.querySelectorAll('.task-item').forEach(el => el.remove());
// });

// clearDoneBtn.addEventListener('click', () => {
// 	document.querySelectorAll('.done').forEach(el => el.remove());
// });

const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const clearAllBtn = document.getElementById('clear-all');
const clearDoneBtn = document.getElementById('clear-done');
const sortBtn = document.getElementById('sort-btn');

function createTaskItem(text) {
	const li = document.createElement('li');
	li.className = 'task-item';

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'check';
	checkbox.addEventListener('change', () => li.classList.toggle('done'));

	const span = document.createElement('span');
	span.textContent = text;

	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = '×';
	deleteBtn.className = 'delete';
	deleteBtn.addEventListener('click', () => li.remove());

	li.append(checkbox, span, deleteBtn);
	return li;
}

function clearList(list) {
	while (list.firstChild) {
		list.firstChild.remove();
	}
}

function clearDone(list) {
	const doneItems = list.querySelectorAll('.done');
	doneItems.forEach(el => el.remove());
}

function createTodoLogic() {
	const tasks = [];

	return {
		addTask: text => {
			tasks.push(text);
			return tasks.length;
		},
		getTasks: () => [...tasks],
		clearTasks: () => {
			tasks.length = 0;
		},
	};
}

const todo = createTodoLogic();

addBtn.addEventListener('click', () => {
	const text = input.value.trim();
	if (text === '') return;

	todo.addTask(text);
	const li = createTaskItem(text);
	list.appendChild(li);

	input.value = '';
	input.focus();
});

clearAllBtn.addEventListener('click', () => clearList(list));
clearDoneBtn.addEventListener('click', () => clearDone(list));

sortBtn.addEventListener('click', () => {
	const tasks = Array.from(document.querySelectorAll('.task-item'));

	tasks.sort((a, b) => {
		const textA = a.textContent.replace('×', '').trim();
		const textB = b.textContent.replace('×', '').trim();
		return textA.localeCompare(textB);
	});

	list.innerHTML = '';
	tasks.forEach(task => list.appendChild(task));
});

input.addEventListener('keypress', e => {
	if (e.key === 'Enter') addBtn.click();
});
