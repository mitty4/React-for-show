import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
// import TodoForm from './todoform';

/*
Step 1: create a todo form with input and submit Button and display list of state
Step 2: on submit, add input value to state, which is an array
Step 3: remove the item that is clicked
*/


function Todo(){
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ]);

  const handleCheck = (e) => {
      alert(e.target.key.value.toString());
      // setTodos([{...todos, isCompleted: true}])
  };

  const listItems = todos.map((todo, index) =>
    <li key={index}>{todo.content} <input onChange={handleCheck} type="checkbox" checked={todo.isCompleted} /></li>
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {content: value, isCompleted: false}])
    setValue('');
  };


  const [value, setValue] = useState('');



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          placeholder="task..."
          onChange={(e) => setValue(e.target.value)}>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="default">
          Add Item
        </Button>
      </form>
      <ul>{listItems}</ul>
    </div>
  )
}


export default Todo;
