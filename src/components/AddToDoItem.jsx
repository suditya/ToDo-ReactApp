import React, { useState } from 'react';
import '../styles/AddToDoItem.css';
import { addTaskService } from '../services/addTaskService';

const AddTaskRow = ({ tasks, setTask , getTaskFromDB}) => {
  const [taskInput, setTaskInput] = useState('');

  const addTask = async () => {
    if (taskInput.length === 0) return;


    if (localStorage.getItem('userEmail').length > 0) {
      const newTask = {
        id: tasks.length + 1,
        title: taskInput,
        completed: false,
        email: localStorage.getItem('userEmail')
      };
      // const updatedTasks = [...tasks, newTask];
      // setTask(updatedTasks);
      try {
        // console.log(newTask, " new task adding ")
        const res = await addTaskService(newTask);
        
        
        await getTaskFromDB();
        setTaskInput('');
        // console.log(res, "added the task in DB", tasks, " f->", f);
      } catch (error) {
        alert(error.response.data.message);
      }

    } else {
      const newTask = {
        id: tasks.length + 1,
        title: taskInput,
        completed: false
      };
      const updatedTasks = [...tasks, newTask];
      setTask(updatedTasks);
      setTaskInput('');
    }


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
