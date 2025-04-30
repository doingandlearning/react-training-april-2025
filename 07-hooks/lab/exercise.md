# Typing Speed Tracker Lab

## Goal

Build a typing speed tracker. The user will have 60 seconds to type as much as they can. At the end, show how many words they typed.

---

## Tasks

1. Add a `text` state to store what the user is typing.

2. Add a `timeLeft` state, starting at 60 seconds.

3. Add an `isRunning` state to track if the game is active.

4. Create a `handleChange` function that updates the `text` state.

5. Create a `startGame` function that:
   - Clears the text input
   - Resets the timer to 60
   - Sets `isRunning` to true

6. Use `useEffect` to:
   - Start a countdown that reduces `timeLeft` by 1 every second.
   - Stop the countdown and disable typing when time runs out.

7. After the game ends, show how many words the user typed.

---

## Stretch Goals

- Allow user to change the time limit.
- Highlight the text area in green when active.
- Allow restarting the game without page refresh.

---

## Folder Structure

- `student/` — Starter code with TODOs
- `solution/` — Complete working version
