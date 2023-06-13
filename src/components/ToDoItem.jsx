import React, { useState } from 'react';
import '../styles/ToDoItem.css';

export const TodoItem = ({ task, tasks, setTask, completedTasks, setCompletedTasks, remainingTasks, setRemainingTasks }) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [taskInput, setTaskInput] = useState(task.title);

    const deleteTask = (task) => {
        const updatedItems = tasks.filter((t) => t.id !== task.id);
        setTask(updatedItems);
    };

    const editTask = () => {
        setEdit(!edit);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const updatedTasks = tasks.map((t) =>
                t.id === task.id ? { ...t, title: taskInput } : t
            );
            //task = taskInput;
            //setTaskInput(task);
            setTask(updatedTasks);
            setEdit(false);
        }
    };

    const check = (task) => {
        task.completed = !(task.completed);
        let updatedTasks = tasks.filter((t) => {
            return t.id != task.id;
        })
        updatedTasks.push(task);
        setTask(updatedTasks);
        console.log(updatedTasks, "after checking", tasks);
    };

    return (
        <div className='containerX'>
            <div className="todo-item">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={task.completed}
                    onChange={() => check(task)}
                />
                {console.log(task.title, " it is checked :", checked, " ", task.completed)}
                <div className="task-title">
                    {edit ? (
                        <>
                            <input
                                type="text"
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                className="edit-task-input"
                                onKeyDown={handleKeyDown}
                            />
                        </>
                    ) : (
                        <>
                            <span
                                style={{
                                    textDecoration: task.completed ? 'line-through' : 'none',
                                    fontStyle: task.completed ? 'italic' : 'normal',
                                }}
                            >
                                {task.title}
                            </span>
                        </>
                    )}
                </div>
                <button
                    className="done-button"
                    style={{ display: edit ? 'initial' : 'none' }}
                    onClick={editTask}
                >
                    Done ✅
                </button>
                <button
                    className="edit-button"
                    style={{ display: edit ? 'none' : 'initial' }}
                    onClick={editTask}
                >
                    Edit 📝
                </button>
                <button className="delete-button" onClick={() => deleteTask(task)}>
                    Delete 🗑️
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
