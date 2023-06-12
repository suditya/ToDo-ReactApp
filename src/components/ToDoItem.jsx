import React, { useState } from 'react'
import '../styles/ToDoItem.css'

export const TodoItem = ({ task,tasks, setTask }) => {
    const [checked, setChecked] = useState(false);
    const deleteTask = () => {
        // tasks=""
        const updatedItems = tasks.filter((t)=>
        {
            return (t!==task)
        })
        console.log(updatedItems, "afetr deleted");
        setTask(updatedItems);
    }
    return (
        <div className='container'>
            <div className="todo-item">
                {console.log(task,checked)}
                <input type="checkbox" className="checkbox" checked={checked} onChange={(e) => setChecked(checked^1)}/>
                <span className="task-title" style={{ textDecoration : checked ? 'line-through' : 'none' }}>{task}</span>
                <button className="delete-button" onClick={deleteTask}  >
                    Delete
                </button>
            </div></div>
    );
};

export default TodoItem;

