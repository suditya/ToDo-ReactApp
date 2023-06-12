import React from 'react'
import '../styles/ToDoItem.css'

export const TodoItem = ({ task,tasks, setTask }) => {
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
                <input type="checkbox" className="checkbox" checked={true}/>
                <span className="task-title">{task}</span>
                <button className="delete-button" onClick={deleteTask}  >
                    Delete
                </button>
            </div></div>
    );
};

export default TodoItem;

