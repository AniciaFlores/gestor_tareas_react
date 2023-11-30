// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  // Implementa el componente TaskList
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
