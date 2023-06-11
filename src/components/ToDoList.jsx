import React from 'react'
import { useState } from 'react'

export const ToDoList = () => {
    const [tasks,setTask] = useState(['Eat','Sleep','Code','Exercise','And','Repeat']);
    return (
        <div>
        ToDoList
        <ul>
        {tasks.join(', ')}
            {
                tasks.map((task)=>
                {
                    {/* {task} */}
                    <li>your task is {task}</li>
                })
                
            }
        </ul>
        </div>
    )
}
