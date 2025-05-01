export function add(a: number, b: number) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers.");
  }
  return a + b;
}

// **/*.{test,spec}.?(c|m)[jt]s?(x)

// .test.js
// .test.ts
// .test.cjs
// .test.mjs
// .test.jsx
// .test.tsx

// .spec.js
// .spec.ts
// .spec.cjs
// .spec.mjs
// .spec.jsx
// .spec.tsx
