import './style.css';
import Todo from './Todo';

const sampleData = [
	{
		id: 0,
		title: 'Todo #1',
		desc: "A todo that I haven't started",
		status: 'not-started',
	},
	{
		id: 1,
		title: 'Todo #2',
		desc: "A todo that I'm doing.",
		status: 'in-progress',
	},
	{
		id: 2,
		title: 'Todo #3',
		desc: "A todo that I've done.",
		status: 'done',
	},
];

if (!localStorage.getItem('todos')) {
	localStorage.setItem('todos', JSON.stringify(sampleData));
}

class UI {
	constructor() {
		this.aside = document.querySelector('aside');
		this.todoListEl = document.querySelector('#todoList');
		this.addTodoBtn = document.querySelector('#addTodo');
		this.todos = JSON.parse(localStorage.getItem('todos'));
	}

	load = () => {
		// add todos to content area
		for (const todo of this.todos) {
			const todoObj = new Todo(todo);
			todoObj.build(this.todoListEl);
		}

		this.addTodoBtn.addEventListener('click', () => {
			const defaultTodo = {
				id: crypto.randomUUID(),
				title: 'New todo',
				desc: 'Add a description...',
				status: 'not-started',
			};

			const todos = JSON.parse(localStorage.getItem('todos'));
			todos.push(defaultTodo);
			localStorage.setItem('todos', JSON.stringify(todos));

			const newTodo = new Todo(defaultTodo);
			newTodo.build(this.todoListEl);
		});

		// add projects to aside area
	};
}

const homepage = new UI();
homepage.load();
