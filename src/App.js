// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(storedTasks);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: newTask, completed: false },
    ]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    const deletedTask = tasks.find((task) => task.id === taskId);

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setDeletedTasks((prevDeletedTasks) => [...prevDeletedTasks, deletedTask]);

    // Muestra mensaje de eliminación
    setMessage(`Tarea "${deletedTask.name}" eliminada.`);

    // Después de 3 segundos, limpia el mensaje
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const undoDelete = () => {
    if (deletedTasks.length > 0) {
      const lastDeletedTask = deletedTasks[deletedTasks.length - 1];
      setTasks((prevTasks) => [...prevTasks, lastDeletedTask]);
      setDeletedTasks((prevDeletedTasks) =>
        prevDeletedTasks.slice(0, -1)
      );

      // Muestra mensaje de deshacer
      setMessage(`Deshaciendo la eliminación de "${lastDeletedTask.name}".`);

      // Después de 3 segundos, limpia el mensaje
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  const editTask = (taskId, editedText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, name: editedText } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Controla tus Tareas</h1>
      <TaskForm onAddTask={addTask} />
      {message && <p className="message">{message}</p>}
      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onEditTask={editTask} 
      />
      {deletedTasks.length > 0 && (
        <button className="undo-button" onClick={undoDelete}>
          Deshacer
        </button>
      )}
    </div>
  );
}

export default App;
