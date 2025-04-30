# Auth Context Lab

## Goal

Use `useContext` and `useReducer` to manage simple global authentication state.

You'll build a mini app where:
- User can log in (hardcoded name)
- Once logged in, user sees a welcome message and logout button
- State is shared and updated through context

---

## Tasks

1. **Set up initial state and reducer**
   - `loggedIn: false`, `user: null`
   - Handle two actions: `LOGIN` (with username) and `LOGOUT`

2. **Create AuthContext**
   - Use `createContext` and `useReducer`
   - Wrap your `App` in a provider

3. **Consume Context**
   - Create a `LoginForm` that dispatches a `LOGIN` action (for the main task, feel free to hard code the username)
   - Create a `WelcomeMessage` that shows the logged-in user
   - Create a `LogoutButton` that dispatches `LOGOUT`

4. **Conditionally Render**
   - If logged in: show welcome + logout
   - If not logged in: show login form

---

## Bonus

- Allow entering a custom username instead of hardcoded value
- Persist login state to `localStorage`

---

## Folder Structure

- `student/` — Starter code with TODOs
- `solution/` — Full implementation
