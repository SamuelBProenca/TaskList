// src/services/taskService.js

import ITaskService from '../interfaces/ITaskService';
import Task from '../models/Task';

class TaskService extends ITaskService {
    addTask(tasks, newTask) {
        if (newTask.trim() !== '') {
            return [...tasks, new Task(newTask)];
        }
        return tasks;
    }

    removeTask(tasks, index) {
        return tasks.filter((task, i) => i !== index);
    }

    markTask(tasks, index) {
        return tasks.map((task, i) => {
            if (i === index) {
                task.toggleCompleted();
            }
            return task;
        });
    }
}

export default TaskService;
