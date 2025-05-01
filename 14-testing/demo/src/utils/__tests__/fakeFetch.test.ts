import { expect, test, afterEach, beforeEach, vi } from "vitest";
import fakeFetch from "../fakeFetch";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("responds with data", async () => {
  const response = fakeFetch("http://example.com");
  vi.runAllTimers();
  const data = await response;

  expect(Buffer.isBuffer(data)).toBe(true);
  expect(data).toMatchInlineSnapshot(`
    {
      "data": [
        115,
        111,
        109,
        101,
        32,
        100,
        97,
        116,
        97,
      ],
      "type": "Buffer",
    }
  `);
});

test("handles network error", async () => {
  try {
    const response = fakeFetch("http://error.com");
    vi.runAllTimers();
    await expect(response).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: network error]`
    );
  } catch (error) {
    expect(error);
  }
});
