import { expect, describe, test } from "vitest";
import { add } from "../add";

describe("Add happy path", () => {
  test("adding positive numbers returns correct result", () => {
    // Arrange : Given
    // Act     : When
    // Assert  : Then
    expect(add(1, 2)).toBe(3);
    expect(add(3, 4)).toBe(7);
  });
  test("adding negative numbers returns correct result", () => {
    // Arrange : Given
    // Act     : When
    // Assert  : Then
    expect(add(-1, -2)).toBe(-3);
    expect(add(-3, -4)).toBe(-7);
  });
});

describe("Add unhappy path", () => {
  test("non numbers will throw an error", () => {
    expect(() => add(true as any, {} as any)).toThrow();
    expect(() =>
      add(true as any, {} as any)
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: Both arguments must be numbers.]`
    );
  });
});
