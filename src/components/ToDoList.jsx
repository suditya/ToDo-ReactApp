import React from 'react'
import { useState } from 'react'
import TodoItem from './ToDoItem';

export const ToDoList = () => {
    const [tasks, setTask] = useState(['Eat', 'Sleep', 'Code', 'Exercise', 'And', 'Repeat']);
    return (
        <div>
            ToDoList
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem props={task}/>
                ))}
            </ul>
        </div>
    )
}
