import './App.css';
import { Header } from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    // Deleting this way in react doesn't work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => { //I've got no fucking idea ki yeh 
      return e !== todo;           //kya kiya hai 
    }))
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    if (todos.length === 0) {
      var sno = 1;
    }
    else { sno = todos[todos.length - 1].sno + 1; }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);//WTF is ...todos and yeh kya kiya h iss line mein? :'(
    console.log(myTodo)
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <><AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} /></>
            )
          }}>
            {/* <Route exact path="/">
            <AddTodo addTodo={addTodo} />  {/*agar yeh tareeka chal raha h toh woh render={()=>{return(<></>)}} kyu kiya?? APPPS */}
            {/* <Todos todos={todos} onDelete={onDelete} /> */}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
