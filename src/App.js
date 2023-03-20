// import logo from './logo.svg';
import './App.css'
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer'
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))   // parse converts json string to an object
  }
  const onDelete = (todo) => {
    console.log("Iam Delete ", todo)
    // let index = todos.indexOf(todo) // getting the index of todo in array of todos object
    // todos.splice(index, index + 1) // generally splice delete the todo from obj but do not update in dom we need to use use state hook
    setTodos(todos.filter((e) => { // we are filtering the obj
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // creating the use state of (todo items)
  // todos is name and setTodos is function
  const [todos, setTodos] = useState(initTodo); //  initiating to initTodo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // stringify converts js to json string
  }, [todos])
  // when the change occur in todo call this effect ( this effect set the data in name of todos)

  const addtodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else { sno = todos[todos.length - 1].sno + 1; }
    let mynewtodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos(oldArray => [...oldArray, mynewtodo]);
    console.log(mynewtodo)
  }

  return (
    <>
      <Header title="Todo-List" searchBar={true} />
      <AddTodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />    {/* passing two items todos object and onDelete function */}
      <Footer />
    </>
  );

}

export default App;
