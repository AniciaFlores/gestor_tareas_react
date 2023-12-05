// TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = event => {
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" type="submit" disabled={!newTask}>
          Agregar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
