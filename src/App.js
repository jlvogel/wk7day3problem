/*
Problem Solving

ALLLLLLL MY STUDENTS ALWAYS end up being asked at some point in the interview process how to create a Todo List with Basic CRUD capability.

Creating New Todo Items

Reading/Seeing Todos

Updating Todos that have been created

Deleting Todos off the Page

This exercise provides step-by-step instructions for creating a simple React Todo List using React Hooks. It covers setting up the initial project, creating the React components and styling them, and using React Hooks to store and manipulate data. By the end, you will have a fully functional React Todo List.

1. Set up your project: First, create a new React project using the create-react-app command. Delete src folder, and then re-create it. Add Back in index.js, App.js, styles.css

  /// DONE

2. Create a Todo component: Next, create a Todo component that will render a single todo item. This component should accept a todo object as a prop and display the todo's text and a checkbox to mark it as complete.

3. Create a TodoList component: Then, create a TodoList component that will render a list of todo items. This component should accept an array of todo objects as a prop, and loop through the array to render a Todo component

4. Use React Hooks: Next, use React Hooks to store and manipulate the data with UseState

5. Handle user interactions: Then, add event handlers to handle user interactions. For example, you can add an onChange handler to the checkbox to mark a todo as complete.

6. Add new todos: Add an input to the TodoList component so users can add new todos. This input should update the state when the user types enter.

7. Filter todos: Add a filter option to the TodoList component so users can filter todos by completed or incompleted.

8. Add persistence: To persist the data, you can use local storage. Add a function to save and retrieve the todos from local storage.

9. Add Delete Functionality to the Todo List

10. Add styling: Now, add some basic styling to the components.

11. Test and debug: Finally, test and debug the app to make sure everything is working correctly.

In each file let's brainstorm its purpose

index.js
  What is the purpose of this file
  Whate code should be contained here?

App.js
  What is the purpose of this file?
  What code should be contained here?

styles.css
  What is the purpose of this file?
  What code should be contained here?

ToDo.js
  What is the purpose of this file?
  What code should be contained here?

TodoList.js
  What is the purpose of this file?
  What code should be contained here?


Diagram

                index.html
                 div#root             |  State: todos, setTodos
                    |           _---{ |  Functions: addTodo, completeTodo,
                  index      _-'      |  deleteTodo, editTodoText
                    |     _-'
                   App---'
                    |
                 TodoList------------ Props: todos, addTodo, completeTodo,
                    /\                deleteTodo, editTodoText
                   /  \
                  /    \
                 /      \
                /        \
              Todo      Todo--------- Props: todos, addTodo, completeTodo,
                                      deleteTodo, editTodoText
        MAPPING TODOS and Passing the
         individual todo to each Todo
              Component as Prop

Now That We Have A Game Plan

  Let's do Step 1

  Set up your project: First, create a new React project using the create-react-app command. Delete src folder, and then re-create it. Add Back in index.js, App.js, styles.css, components/Todo.js, components/TodoList.js
*/