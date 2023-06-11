import React from 'react'
import '../styles/ToDoItem.css'

export const TodoItem = ({ task }) => {
    return (
        <div className='container'>
            <div className="todo-item">
                <input type="checkbox" className="checkbox" />
                <span className="task-title">{task}</span>
                <button className="delete-button" >
                    Delete
                </button>
            </div></div>
    );
};

export default TodoItem;

