// src/models/Task.js

class Task {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

export default Task;
