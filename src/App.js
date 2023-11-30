import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('La lista de tareas ha sido actualizada:', tasks);
  }, [tasks]);

  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, { id: Date.now(), name: newTask, completed: false }]);
  };

  return (
    <div className="app">
      <h1>Gestión de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
