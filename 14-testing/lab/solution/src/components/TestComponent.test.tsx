import React from 'react';
import { beforeEach, describe, test, expect } from "vitest"
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import NoteEditor from './TestComponent';

beforeEach(cleanup)

describe('NoteEditor Component', () => {
	test('renders input fields and save button', () => {
		render(<NoteEditor />);
		expect(screen.getByPlaceholderText('Title')).toBeTruthy();
		expect(screen.getByPlaceholderText('Content')).toBeTruthy();
		expect(screen.getByRole('button', { name: /save note/i })).toBeTruthy();
	});

	test('updates state on input field change', () => {
		render(<NoteEditor />);
		const titleInput = screen.getByPlaceholderText('Title');
		fireEvent.change(titleInput, { target: { value: 'Test Title' } });
		expect(titleInput.value).toBe('Test Title');
	});

	test('updates state on textarea change', () => {
		render(<NoteEditor />);
		const contentTextarea = screen.getByPlaceholderText('Content');
		fireEvent.change(contentTextarea, { target: { value: 'Test Content' } });
		expect(contentTextarea.value).toBe('Test Content');
	});

	test('adds a new note on save', () => {
		render(<NoteEditor />);
		const titleInput = screen.getByPlaceholderText('Title');
		const contentTextarea = screen.getByPlaceholderText('Content');
		const saveButton = screen.getByRole('button', { name: /save note/i });

		fireEvent.change(titleInput, { target: { value: 'Test Title' } });
		fireEvent.change(contentTextarea, { target: { value: 'Test Content' } });
		fireEvent.click(saveButton);

		expect(screen.getByText('Test Title')).toBeTruthy();
		expect(screen.getByText('Test Content')).toBeTruthy();
	});

	test('deletes a note', () => {
		render(<NoteEditor />);
		const titleInput = screen.getByPlaceholderText('Title');
		const contentTextarea = screen.getByPlaceholderText('Content');
		const saveButton = screen.getByRole('button', { name: /save note/i });

		// Add and then delete the note
		fireEvent.change(titleInput, { target: { value: 'Test Title' } });
		fireEvent.change(contentTextarea, { target: { value: 'Test Content' } });
		fireEvent.click(saveButton);
		const deleteButton = screen.getByRole('button', { name: /delete/i });
		fireEvent.click(deleteButton);

		expect(screen.queryByText('Test Title')).toBeNull();
		expect(screen.queryByText('Test Content')).toBeNull();
	});

	test('prevents adding empty notes', () => {
		render(<NoteEditor />);
		const saveButton = screen.getByRole('button', { name: /save note/i });

		fireEvent.click(saveButton);

		expect(screen.queryByRole('listitem')).toBeNull();
	});
});
