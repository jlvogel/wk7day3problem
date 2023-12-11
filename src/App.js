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

import "./styles.css"
import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"

export default function App() {
  const [todos, setTodos] = useState([])

  /*
  Add Persistence

  Add a UseEffect

  Like we mentioned at the beginning of class the useEffect hook in React is a built-in hook that allows developers to execute code after a component renders. It is triggered after every render, including the first render.  It is used to perform side effects such as data fetching, manually changing the DOM, and subscribing/unsubscribing from external events. The useEffect hook takes a function as an argument and is triggered after the component renders. This function should contain all of the code that needs to be executed after the component renders. The useEffect hook is a powerful tool for managing side effects in React components.
  */

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos));
    };
  }, []);

  /*
  We are using the useEffect here to take todos that are stored in the localStorage and automatically set our state to them.

  But in order for this code to actually ever fetch anything from localStorage we need to set the localStorage everytime we update the state

  localStorage.setItem("todos", JSON.stringify(Place Todos Here))

  Local Storage to persist simple data

  LocalStorage can be used with React to store and retrieve data in the browser after the user does a reload of the browser.

  To set a value in the browser's local storage, use the setItem() method.  For example, to store a value called 'name', use the following code:

  localStorage.setItem('name', 'John Doe');

  To retrieve a value from the browser's local storage, use the getItem() method. For example, to retrieve the value stored with the key 'name', use the following code:

  let name = localStorage.getItem('name');

  To remove a value from the browser's local storage, use the removeItem() method. For example, to remove the value stored with the key 'name',use the following code:

  localStorage.removeItem('name');

  local Storage saves all data as a string so we also must use the JSON.stringify to stringify things like objects and arrays before we store it in localStorage

  Then when we want to retrieve it we must use JSON.parse to turn it back into an object or array.

  /// Ok whoa this is all pretty deep
  */

  const addTodo = (e) => {
    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]))
    setTodos([newTodo, ...todos])
    e.target.value = ""
  }

  const completeTodo = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
  }

  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
    e.target.value = ""
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    localStorage.setItem(
      "todos",
      JSON.stringify([...todosCopy])
    )
    setTodos([...todosCopy])
  };

  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}