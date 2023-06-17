import React, { useState } from 'react';
import '../styles/ToDoItem.css';
import { deletedTaskService } from '../services/deleteTask';
import { editTaskService } from '../services/editTaskService';

export const TodoItem = ({ task, tasks, setTask, getTaskFromDB }) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [taskInput, setTaskInput] = useState(task.title);

    const deleteTask = async (task) => {
        if (localStorage.getItem('userEmail').length > 0) {
            try {
                const credential =
                {
                    title: task.title,
                    email: localStorage.getItem('userEmail')
                }
                console.log(credential, " to be deleted ");
                const res = await deletedTaskService(credential);
                await getTaskFromDB();

            } catch (error) {
                console.log(error, 'error in deleting')
            }
        }
        else {
            const updatedItems = tasks.filter((t) => t.id !== task.id);
            setTask(updatedItems);
        }

    };

    const editTask = () => {
        setEdit(!edit);
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            if (localStorage.getItem('userEmail')) {
                try {
                    const credential =
                    {
                        id: task.id,
                        email: localStorage.getItem('userEmail'),
                        title: taskInput,
                        completed: task.completed
                    }
                    const res = await editTaskService(credential);
                    console.log(credential, " to be edited ", res);
                    await getTaskFromDB();

                } catch (error) {
                    console.log(error, 'error in editing')
                }
                setEdit(false);
            }
            else {
                const updatedTasks = tasks.map((t) =>
                    t.id === task.id ? { ...t, title: taskInput } : t);
                setTask(updatedTasks);
                setEdit(false);
            }

            //task = taskInput;
            //setTaskInput(task);

        }
    };

    const check = async (task) => {
        task.completed = !(task.completed);
        if (localStorage.getItem('userEmail')) {   //logged in 
            try {

                const credential =
                {
                    id: task.id,
                    email: localStorage.getItem('userEmail'),
                    title: taskInput,
                    completed: task.completed
                }
                const res = await editTaskService(credential);
                console.log(credential, " to be edited ", res);
                await getTaskFromDB();

            } catch (error) {
                console.log(error, 'error in editing')
            }
        }
        else {
            let updatedTasks = tasks.filter((t) => {
                return t.id != task.id;
            })
            updatedTasks.push(task);
            setTask(updatedTasks);
            console.log(updatedTasks, "after checking", tasks);
        }

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
                {console.log(task.title, " it is checked :", checked, " ", task.completed, " task input ", taskInput)}
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
