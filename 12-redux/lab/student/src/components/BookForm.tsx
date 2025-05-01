import React, { useState } from 'react';
import { useLibrary } from '../hooks/useLibrary';
import Book from '../book';

function BookForm() {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const { addBook } = useLibrary();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newBook = new Book(title, author);
		addBook(newBook)
		// Reset form fields
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title">Title:</label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor="author">Author:</label>
				<input
					id="author"
					type="text"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					required
				/>
			</div>
			<button type="submit">Add Book</button>
		</form>
	);
}

export default BookForm;
