import React from 'react';
import { useState } from 'react';
//this component works with a form to create a new todo
//1) create text input for the text
//2) create a date input for the date (only in the future)
//3) create a select option with 3 options and 3 colors (completed, partially completed, not started)
//and it should also work to modify an existing todo (later)
const NewTodo = ({ existingTodo, back, sendingTodoBack }) => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [priority, setPriority] = useState();
  const [todo, setTodo] = useState({});
  const [error, setError] = useState('');
  const onTodoTitle = (e) => {
    setTitle(e.target.value);
  };
  const onTodoDate = (e) => {
    setDate(e.target.value);
  };
  const onTodoPriority = (e) => {
    setPriority(e.target.value);
  };
  const onCreatingTodo = (e) => {
    e.preventDefault();
    if (title && date && priority) {
      let newTodo = { title: title, date: date, priority: priority };
      setTodo(newTodo);
      setError('');
      sendingTodoBack(newTodo);
    } else {
      setError('all fields are required');
    }
  };
  const onSettingSwitchButton = (e) => {
    e.preventDefault();
    back();
  };

  return (
    <div>
      <form>
        <label>name of todo</label>
        <input type="text" onChange={onTodoTitle}></input>
        <label>to be completed by</label>
        <input type="text" onChange={onTodoDate}></input>
        <label>status</label>
        <select onChange={onTodoPriority}>
          <option defaultValue={'please choose one'}></option>
          <option>completed</option>
          <option>partly completed</option>
          <option>not started</option>
        </select>
        <button onClick={onSettingSwitchButton}>Cancel</button>
        <button onClick={onCreatingTodo}>OK</button>
      </form>
      {error}
    </div>
  );
};
export default NewTodo;
