import React, { useState } from 'react';

function NoteEditor() {
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSaveNote = () => {
		if (title.trim() !== '' && content.trim() !== '') {
			setNotes([...notes, { title, content }]);
			setTitle('');
			setContent('');
		}
	};

	const handleDeleteNote = (index) => {
		const newNotes = notes.filter((_, i) => i !== index);
		setNotes(newNotes);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			></textarea>
			<button onClick={handleSaveNote}>Save Note</button>
			<ul>
				{notes.map((note, index) => (
					<li key={index}>
						<h3>{note.title}</h3>
						<p>{note.content}</p>
						<button onClick={() => handleDeleteNote(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default NoteEditor;
