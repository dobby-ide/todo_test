import React from 'react';
import { useState } from 'react';

const Todo = ({ title, date, priority, id, modifyATodo, todolist }) => {
  const [hide, setHide] = useState(false);
  //id of the todo that needs to be modified is set here
  const [retrievedId, setId] = useState('');
  const onModifyingTodo = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id);
    const idToModify = e.currentTarget.id;
    setId(idToModify);

    if (!hide) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  //functions to modify a todo from here
  const [newtitle, setnewTitle] = useState();
  const [newdate, setDate] = useState();
  const [newpriority, setPriority] = useState();
  const [todo, setTodo] = useState({});
  const [error, setError] = useState('');
  const [updatedTodoList, setUpdatedTodoList] = useState([]);
  const onTodoTitle = (e) => {
    setnewTitle(e.target.value);
  };
  const onTodoDate = (e) => {
    setDate(e.target.value);
  };
  const onTodoPriority = (e) => {
    setPriority(e.target.value);
  };
  const onSettingSwitchButton = () => {
    setHide(false);
  };
  const onCreatingTodo = (e) => {
    e.preventDefault();

    setHide(false);
    let newTodoList = [...todolist];

    for (let i = 0; i < newTodoList.length; i++) {
      console.log(retrievedId);
      console.log(newTodoList[i].id);
      if (Number(retrievedId) === Number(newTodoList[i].id)) {
        console.log('hello');
        newTodoList[i].title = newtitle;
        newTodoList[i].date = newdate;
        newTodoList[i].priority = newpriority;
      }
      console.log(newTodoList);
      modifyATodo(newTodoList);
    }
    //sendingback the new object to app; can also call onModifyingTodo
  };
  return (
    <div>
      {!hide ? (
        <div
          className="todocontainer"
          onClick={onModifyingTodo}
          key={id}
          id={id}
        >
          <div>{title}</div>
          <div>{date}</div>
          <div>{priority}</div>
        </div>
      ) : (
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
      )}
    </div>
  );
};
export default Todo;
