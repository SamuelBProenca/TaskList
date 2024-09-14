// src/components/ToDoList.jsx

import '../assets/css/my-tasks.css';
import React, { useState } from "react";
import TaskService from '../services/taskService';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const taskService = new TaskService();

    const handleAdd = (e) => {
        e.preventDefault();
        const updatedTasks = taskService.addTask(tasks, newTask);
        setTasks(updatedTasks);
        setNewTask('');
    }

    const handleRemove = (index) => {
        const updatedTasks = taskService.removeTask(tasks, index);
        setTasks(updatedTasks);
    }

    const handleMark = (index) => {
        const updatedTasks = taskService.markTask(tasks, index);
        setTasks(updatedTasks);
        
    }

    return (
        <>
            <form className="Task" onSubmit={handleAdd}>
                <h2>Digite a nova Task</h2>
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Digite a Task" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                />
                <button type="submit" className='sub'>Adicionar</button>
            </form>

            <div className="taskList">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.completed ? 'completed' : ''}>
                        <span className={task.completed ? 'completed' : ''}>
                            {task.text}
                        </span>
                        <button type='checkbox' className='mark' onClick={() => handleMark(index)}>
                            {task.completed ? 'Desmarcar' : 'Marcar'}
                        </button>
                        <button className='delete' onClick={() => handleRemove(index)}>Remover</button>
                    </li>
                    
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ToDoList;
