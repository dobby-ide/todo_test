import React from 'react';
import { useState } from 'react';
import './App.css';
import Switch from './Switch';
import NewTodo from './NewTodo';
import List from './List';
function App() {
  let dummydata = [
    { id: 1, title: 'newtodo', date: 'today', priority: 'right now' },
  ];
  const [newTodoisVisible, setNewTodoVisible] = useState(false);
  const [newTodo, setNewTodo] = useState({});
  let [todoList, setTodoList] = useState(dummydata);
  //button from Switch.js calls the onCreatingNewTodo and set the visibility
  const onCreatingNewTodo = () => {
    if (newTodoisVisible) {
      setNewTodoVisible(false);
    } else {
      setNewTodoVisible(true);
    }
  };
  const onHandlingNewTodo = (e) => {
    console.log(e);
    onCreatingNewTodo();
    let t = [...todoList];
    let lastId = 0;
    for (let i = 0; i < t.length; i++) {
      lastId = t[i].id;
      //if t[0] is undefined then id is 1
      //else
    }
    console.log(lastId);
    let myTodo = {
      id: lastId + 1,
      title: e.title,
      date: e.date,
      priority: e.priority,
    };
    t.push(myTodo);
    onAddingInTodoList(t);
  };
  const onAddingInTodoList = (t) => {
    setTodoList(t);
  };
  const onModifyingTodo = (e) => {
    console.log(e);
    setTodoList(e);
  };
  console.log(newTodo);
  console.log(todoList);
  return (
    <div className="App">
      <Switch isActive={onCreatingNewTodo} />
      {newTodoisVisible ? (
        <NewTodo back={onCreatingNewTodo} sendingTodoBack={onHandlingNewTodo} />
      ) : null}
      <List
        addATodo={newTodo}
        todolist={todoList}
        todoToApp={onModifyingTodo}
      ></List>
    </div>
  );
}

export default App;
