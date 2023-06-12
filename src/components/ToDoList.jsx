import React from 'react'
import { useState } from 'react'
import TodoItem from './ToDoItem';
import AddTaskRow  from './AddToDoItem';

export const ToDoList = () => {
    const [tasks, setTask] = useState(['Add Your Tasks','Repeat']);
    const titleStyle = {
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '40px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      };
    return (
        <div>
            <h1 style={titleStyle}>Todo App ✅</h1>;
            <hr></hr>
            <AddTaskRow  tasks={tasks} setTask={setTask}/>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem task={task} setTask={setTask} tasks={tasks}/>
                ))}
            </ul>
        </div>
    )
}
