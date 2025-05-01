# Lab: Adding Forms to the Book and Film Pages Using `useLibrary` Hook

## Overview

In this lab, you will enhance the "My Library" web application by adding interactive forms to the Book and Film pages. These forms will allow users to add new books and films to the library. You'll utilize the `useLibrary` hook to interact with the global state managed by the context and reducer.

## Objectives

1. Create a form to add new books to the library.
2. Create a form to add new films to the library.
3. Utilize the `useLibrary` hook to dispatch actions to the reducer.

## Roadmap

### Exercise 1: Preparing the Book Form Component

- Create a `BookForm` component with fields for the book's title and author.
- Use local component state to manage form inputs.

### Exercise 2: Integrating the Book Form with Reducer

- In `BookForm`, use the `useLibrary` hook to access the dispatch method.
- On form submission, dispatch an `ADD_BOOK` action with the form data.
- Update the ADD_BOOK method to receive a book prop
- Ensure the new book appears in the book list upon submission.

### Exercise 3: Creating the Film Form Component

- Repeat the process with a `FilmForm` component, including fields for the film's name, genre, and blurb.
- Manage form state within the component.

### Exercise 4: Integrating the Film Form with Reducer

- Utilize the `useLibrary` hook in `FilmForm` to access the dispatch function.
- Dispatch an `ADD_FILM` action with the new film data on form submission.
- Confirm that the film list updates with the newly added film.

### Exercise 5: Styling and Testing Forms

- Apply styling to both forms for a consistent and user-friendly interface.
- Test both forms to ensure they correctly add books and films to the library.

### Exercise 6: Advanced Feature Implementation (Optional)

- Implement form validation to ensure data integrity (e.g., no empty fields).
- Explore the possibility of using a third-party library like Formik or React Hook Form for form handling.

## Conclusion

Upon completion of this lab, your web application will have enhanced functionality, allowing users to add new books and films to the library. This exercise will deepen your understanding of managing global state with React Context and Reducers, as well as handling form inputs in React.
