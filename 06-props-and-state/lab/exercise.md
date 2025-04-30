# Task Progress Lab

## Goal

Use `useState` to manage a task's status as it moves through the following states:

- Not Started → In Progress → Complete → Archived → Not Started

This simulates a real-world task workflow. You'll manage a state variable, update it in sequence, and render visual feedback.

---

## Tasks

1. **Import `useState` from React**

2. **Set up a state variable** called `status`, starting with `"Not Started"`.

3. **Implement a `nextStatus` function** that:
   - Transitions status in this order:
     `"Not Started"` → `"In Progress"` → `"Complete"` → `"Archived"` → `"Not Started"`

4. **Update the button's `onClick` handler** to use your function.

5. **Style the current status**
   - A CSS class is dynamically applied based on the status. These are already styled:
     - `status-not-started`, `status-in-progress`, `status-complete`, `status-archived`

---

## Stretch Goals

- Show a timestamp of the last status change
- Disable the "Next Status" button when status is `"Archived"`

---

