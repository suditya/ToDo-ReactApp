import React, { useState } from 'react';
import '../styles/AddToDoItem.css';

const AddTaskRow = ({ tasks, setTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.length === 0) return;

    const newTask = {
      id: tasks.length + 1,
      title: taskInput,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTask(updatedTasks);
    setTaskInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="container">
      <div className="add-task-row">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a task"
          className="task-input"
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={addTask}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddTaskRow;
