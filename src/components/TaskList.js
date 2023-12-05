import TaskItem from './TaskItem'; // Ajusta la ruta según la ubicación de TaskItem.js

function TaskList({ tasks, onToggleComplete, onDelete, onEditTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={() => onToggleComplete(task.id)}
          onDelete={() => onDelete(task.id)}
          onEditTask={onEditTask} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
