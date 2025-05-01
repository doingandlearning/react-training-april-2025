import React, { useState } from 'react';

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleAddTodo = () => {
		if (inputValue.trim() !== '') {
			setTodos([...todos, { text: inputValue, completed: false }]);
			setInputValue('');
		}
	};

	const toggleTodo = (index) => {
		const newTodos = todos.map((todo, i) => {
			if (i === index) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(newTodos);
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Add Todo</button>
			<ul>
				{todos.map((todo, index) => (
					<li
						key={index}
						style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
						onClick={() => toggleTodo(index)}
					>
						{todo.text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
