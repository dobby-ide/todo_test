import React from 'react';
import { useState } from 'react';
import './App.css';
import Switch from './Switch';
import NewTodo from './NewTodo';
function App() {
  const [newTodoisVisible, setNewTodoVisible] = useState(false);
  //button from Switch.js calls the onCreatingNewTodo and set the visibility
  const onCreatingNewTodo = () => {
    if (newTodoisVisible) {
      setNewTodoVisible(false);
    } else {
      setNewTodoVisible(true);
    }
  };

  return (
    <div className="App">
      <Switch isActive={onCreatingNewTodo} />
      {newTodoisVisible ? <NewTodo back={onCreatingNewTodo} /> : null}
    </div>
  );
}

export default App;
