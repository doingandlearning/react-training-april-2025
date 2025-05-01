import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TodoList from ".";
import React from "react"
import { describe, expect, test, beforeEach } from "vitest"

beforeEach(() => {
	cleanup()
})
describe("TodoList Component", () => {
	test('renders input field and the button', () => {
		render(<TodoList />)
		expect(screen.getByRole('textbox')).toBeTruthy()
		expect(screen.getByRole("button")).toBeTruthy()
	})

	test('allows users to add items to the list', () => {
		// Arrange
		render(<TodoList />)
		const input = screen.getByRole("textbox")
		const addButton = screen.getByRole("button", { name: /add todo/i })

		// Act
		fireEvent.change(input, { target: { value: "New todo" } })
		fireEvent.click(addButton)

		// Assert
		expect(input.value).toBe("")
		expect(screen.getByText("New todo")).toBeTruthy()
	})

	test('toggle todo item completion on click', () => {
		// Arrange
		render(<TodoList />)
		const input = screen.getByRole("textbox")
		const addButton = screen.getByRole("button", { name: /add todo/i })
		fireEvent.change(input, { target: { value: "New todo" } })
		fireEvent.click(addButton)

		const todoItem = screen.getByText("New todo")
		fireEvent.click(todoItem)
		expect(todoItem).toMatchSnapshot()

		fireEvent.click(todoItem)
		expect(todoItem).toMatchInlineSnapshot(`
			<li
			  style="text-decoration: none;"
			>
			  New todo
			</li>
		`)
	})
})