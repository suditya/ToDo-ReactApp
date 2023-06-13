import React, { useState } from 'react'
import '../styles/ToDoItem.css'

export const TodoItem = ({ task, tasks, setTask }) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [taskInput, setTaskInput] = useState(task);
    const deleteTask = (task) => {
        // tasks=""
        // console.log(task, "in deleting process")
        const updatedItems = tasks.filter((t) => {
            return (t !== task)
        })
        // console.log(updatedItems, "afetr deleted");
        setTask(updatedItems);
    }
    const editTask = () => {
        setEdit(edit ^ 1);
    }
    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            // chat gpt code
            const updatedTasks = tasks.map((t) => (t === task ? taskInput : t));
            task = taskInput;
            setTaskInput(task);
            setTask(updatedTasks);
            setEdit(false);
            console.log(task, taskInput, tasks, "handle key down ")
        }
    }
    const check = (task) => {
        console.log(task, taskInput, setTask, " checked");
        setChecked(checked ^ 1)
        if(checked)
        {
            
        }
    }
    return (
        <div className='containerX'>
            <div className="todo-item">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={checked}
                    onChange={(e) => check(task)}
                />
                {/* {console.log(task, taskInput, tasks,"from line inside html ")} */}
                <div className="task-title">
                    {edit ? (
                        <><input type="text"
                            // value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            className="edit-task-input"
                            defaultValue={task}
                            onKeyDown={handleKeyDown}
                        /></>)
                        :
                        (<><span style={{ textDecoration: checked ? 'line-through' : 'none', fontStyle: checked ? 'italic' : 'normal' }}>{task}</span>
                        </>
                        )
                    }
                </div>
                <button className="done-button" style={{ display: edit ? 'initial' : 'none' }} onClick={editTask}  >
                    Done ✅
                </button>
                <button className="edit-button" style={{ display: edit ? 'none' : 'initial' }} onClick={editTask}  >
                    Edit 📝
                </button>
                {/* <button className="delete-button" onClick={deleteTask}  >
                    Delete 🗑️
                </button> */}
                <button className="delete-button" onClick={() => deleteTask(task)}>
                    Delete 🗑️
                </button>
            </div>
        </div>
    );
};

export default TodoItem;

