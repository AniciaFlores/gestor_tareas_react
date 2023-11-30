import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
