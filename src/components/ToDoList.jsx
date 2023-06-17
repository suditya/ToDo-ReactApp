import React, { useState, useEffect } from 'react';
import TodoItem from './ToDoItem';
import AddTaskRow from './AddToDoItem';
import Navbar from './NavBar';
import { LoginComponent } from '../components/LoginComponent.jsx';
import { getTask } from '../services/getTask';

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('userEmail').length > 0);
  const [oldIsLoggedIn, setOldIsLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    getTaskFromDB();
  }, isLoggedIn);
  
  const getTaskFromDB = async () => {
    if (localStorage.getItem('userName').length > 0) {
      try {
        const res = await getTask(localStorage.getItem('userEmail'));
        setTasks(res.data);
      } catch (error) {
        // console.log(error);
      }
    } else {
      setTasks([{ title: 'login to save and sync your tasks', id: 1, completed: false }]);
    }
  };
  // if (isLoggedIn) {
  //   getTaskFromDB();
  // }

  // getTaskFromDB();
  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '40px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const handleTaskUpdate = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    } else {
      return 0;
    }
  });
  if (isLoggedIn !== oldIsLoggedIn) {
    getTaskFromDB();
    setOldIsLoggedIn(isLoggedIn);
  }
  // console.log(tasks, sortedTasks)
  return (
    <div>
      <LoginComponent getTaskFromDB={getTaskFromDB} />
      {/* {console.log("isLoggedIN", isLoggedIn)} */}
      <Navbar setLoggedIn={setLoggedIn} getTaskFromDB={getTaskFromDB} />
      <h1 style={titleStyle}>Todo App✅</h1>
      <AddTaskRow tasks={tasks} setTask={handleTaskUpdate} getTaskFromDB={getTaskFromDB} />
      <ul>
        {sortedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTask={handleTaskUpdate}
            getTaskFromDB  = {getTaskFromDB}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
