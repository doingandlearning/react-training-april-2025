import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import MyComponent from "./Component"
import { context as Context } from "./MyContext"

test("renders with mocked context", () => {
  const mockValue = { value: "Test value" }

  render(
    <Context.Provider value={mockValue}>
      <MyComponent />
    </Context.Provider>
  )

  expect(screen.getByText("Test value")).toBeTruthy()
})