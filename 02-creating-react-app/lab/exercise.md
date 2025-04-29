# Creating a React Web Application

## Overview
In this lab, you'll create a simple React web application that displays information about books and films in a library. Many of the labs during the course will be based on this scenario. We'll also have a few other scenarios in some other labs, for the sake of variety.

## Roadmap
Here's a brief summary of the exercises in this lab. More detailed instructions follow later in this lab document:

### Exercise 1: Familiarization with the solution web page
Open the following web page in a browser - this is the solution version for the lab, to give you an idea what you're aiming for:
- `solution/index.html`

The web page should appear as follows:

<img src="https://res.cloudinary.com/kc-cloud/image/upload/f_auto,q_auto/v1/raycast-uploads/sqejpgjj9r83eqxt644f" />

Hover over one of the books or films. A tooltip should appear, showing details about that book or film.

<img src="https://res.cloudinary.com/kc-cloud/image/upload/f_auto,q_auto/v1/raycast-uploads/gtav9dcmshhfupefxbdg" />

### Exercise 2: Getting started with the 'student' web page
Now go to the student folder and open the following web page in a text editor:
- `student/index.html`

This web page contains all the non-React related code you need to get you started. Note the following points:
- We've defined simple classes named Book and Film. Each class has a constructor to initialize an object, and a `toString()` method to return a string representation of the object.
- We've created arrays of books and films. During the lab you'll add React-related code to render this information on the web page.

### Exercise 3: Adding React-related code
Add React-related code to `index.html` to achieve the UI you saw in the solution web app. Here's what you need to do:
- At the beginning of the `<body>` section, define a `<div>` element that will be the target where React will render its content.
- Add `<script>` tags to import the React and ReactDOM libraries.
- Ensure you're using React 18.
- Call `React.createElement()` to create an element for an unordered list of books.
- Call `React.createElement()` to create an element for an unordered list of films.
- Call `React.createElement()` to create a `<div>` to create the overall UI:
  - The My Library heading
  - The Books sub-heading
  - The books list
  - The Films sub-heading
  - The films list
- Use the `ReactDOM.createRoot()` and `root.render()` methods to render the `<div>` in the target element.
  
When you're done, open the web page in the browser and verify it all looks good. If you don’t see any output at all, open Developer Tools in the browser and click the Console tab to see if there are any error messages.
