import React from 'react'

export const TodoItem = ({ props }) => {
    return (
        <div className="todo-item">
            {/* <input type="checkbox" checked={true}  /> */}
            {/* <span className={todo.completed ? 'completed' : ''}>{todo.title}</span> */}

            <span>task :{props}</span> 
            <button>Delete</button>
        </div>
    );
};

export default TodoItem;

