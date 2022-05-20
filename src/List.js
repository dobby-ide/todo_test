import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Todo from './Todo';
const List = ({ addATodo, todolist,todoToApp }) => {
  console.log(todolist);
  const backToApp = (e) =>{
    todoToApp(e)
  }
  return (
    <div>
      {todolist.map((todo) => {
        return (
          <div>
            <Todo
            todolist={todolist}
            modifyATodo={backToApp}
            id={todo.id}
              title={todo.title}
              date={todo.date}
              priority={todo.priority}
            ></Todo>
          </div>
        );
      })}
    </div>
  );
};
export default List;
