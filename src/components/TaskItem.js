// src/components/TaskItem.js
import React, { useState } from 'react';

function TaskItem({ task }) {
  // Implementa el componente TaskItem
  const [completed, setCompleted] = useState(task.completed);

  const handleCompleteToggle = () => {
    setCompleted(!completed);
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleCompleteToggle}>Completar</button>
    </li>
  );
}

export default TaskItem;
