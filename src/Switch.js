import React from 'react';
import { useState } from 'react';

const Switch = ({isActive}) =>{
  const onVisibilityOfNewTodo = () =>{
    isActive();
  }
  return (<div><button onClick={onVisibilityOfNewTodo}>add a todo</button></div>)
}
export default Switch;
