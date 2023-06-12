import React, { useState } from 'react'
import '../styles/ToDoItem.css'

export const TodoItem = ({ task, tasks, setTask }) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [taskInput, setTaskInput] = useState(task);
    const deleteTask = () => {
        // tasks=""
        const updatedItems = tasks.filter((t) => {
            return (t !== task)
        })
        console.log(updatedItems, "afetr deleted");
        setTask(updatedItems);
    }
    const editTask = () => {
        // console.log("edit btn clicked");
        setEdit(edit^1);
    }
    const handleKeyDown =(e)=>
    {
        if(e.key =="Enter")
        {
            // setTaskInput()
            setEdit(false);
        }
    }
    return (
        <div className='containerX'>
            <div className="todo-item">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(checked ^ 1)}
                />
                <div className="task-title">
                    {edit ? (
                        <><input type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        className="edit-task-input"
                        onKeyDown={handleKeyDown} 
                        /></>)
                        :
                        (<><span  style={{ textDecoration: checked ? 'line-through' : 'none', fontStyle: checked ? 'italic' : 'normal' }}>{taskInput}</span>
                        </>
                        )
                        }
                </div>
                {/* <span className="task-title" style={{ textDecoration: checked ? 'line-through' : 'none', fontStyle: checked ? 'italic' : 'normal' }}>{task}</span> */}
                <button className="done-button" style={{display: edit? 'initial' : 'none'}} onClick={editTask}  >
                    Done ✅
                </button>
                <button className="edit-button" style={{display: edit? 'none' : 'initial'}} onClick={editTask}  >
                    Edit 📝
                </button>
                <button className="delete-button" onClick={deleteTask}  >
                    Delete 🗑️
                </button>
            </div>
        </div>
    );
};

export default TodoItem;

