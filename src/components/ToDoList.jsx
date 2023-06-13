import React, { useState } from 'react';
import TodoItem from './ToDoItem';
import AddTaskRow from './AddToDoItem';

export const ToDoList = () => {
  const [tasks, setTask] = useState([
    { id: 1, title: 'Task A', completed: false },
    { id: 2, title: 'Task B', completed: false },
    { id: 3, title: 'Task C', completed: false },
    { id: 4, title: 'Task D', completed: false },
    { id: 5, title: 'Task E', completed: false },
    { id: 6, title: 'Task F', completed: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [remainingTasks, setRemainingTasks] = useState(tasks);

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
    setTask(updatedTasks);
    setRemainingTasks(updatedTasks);
  };
  const sortedTasks = [...remainingTasks, ...completedTasks].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    } else {
      return 0;
    }
  });
  return (
    <div>
      <h1 style={titleStyle}>Todo App✅</h1>
      <AddTaskRow tasks={tasks} setTask={handleTaskUpdate} />
      <ul>
        {sortedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTask={handleTaskUpdate}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
            remainingTasks={remainingTasks}
            setRemainingTasks={setRemainingTasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
