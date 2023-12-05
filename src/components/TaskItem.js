// TaskItem.js
import React, { useState } from 'react';
import './TaskItem.css';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
}

function TaskItem({ task, onToggleComplete, onDelete, onEditTask }) {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.name);

  const handleCompleteToggle = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    onEditTask(task.id, editedText);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(task.name);
    setEditing(false);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <li className={`task-item ${editing ? 'editing' : ''}`}>
      <div className="text-container">
        {editing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            autoFocus
          />
        ) : (
          <span
            className={`task-text ${task.completed ? 'completed-text' : ''}`}
            title={task.name}
          >
            {truncateText(task.name, 140)}
          </span>
        )}
      </div>
      <div className="button-container">
        <button
          className={`complete-button ${task.completed ? 'completed' : ''}`}
          onClick={handleCompleteToggle}
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>

        <button className="delete-button" onClick={handleDelete}>
          Eliminar
        </button>

        {editing ? (
          <>
            <button className="save-button" onClick={handleSaveEdit}>
              Guardar
            </button>
            <button className="cancel-button" onClick={handleCancelEdit}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="edit-button" onClick={handleEdit}>
            Editar
          </button>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
