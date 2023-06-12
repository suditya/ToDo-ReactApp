import React from 'react';
import { useState } from 'react'
import '../styles/AddToDoItem.css';


const AddTaskRow = ({ tasks, setTask }) => {

  const [taskInput, setTaskInput] = useState('');
  const addTask = (event) => {
    if(taskInput.length==0) return;
    const updatedItems = [...tasks, taskInput];
    setTask(updatedItems);
    setTaskInput("")
    // console.log(event, "event");
    // console.log(updatedItems, " ", )
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };
  return (

    <div className='container'>
      
      <div className="add-task-row">
        <input type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} 
          placeholder="Add a task" 
          className="task-input"
          onKeyDown={handleKeyDown} />
        <button className="add-button" onClick={addTask} >+</button>
      </div></div>
  );
};

export default AddTaskRow;
