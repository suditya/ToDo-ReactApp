import React from 'react';
import '../styles/AddToDoItem.css';

const AddTaskRow = () => {
  return (
    <div className='container'>
    <div className="add-task-row">
      <input type="text" placeholder="Add a task" className="task-input" />
      <button className="add-button">+</button>
    </div></div>
  );
};

export default AddTaskRow;
