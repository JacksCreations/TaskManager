import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="TaskBox">
      <h1>Task feed</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default Tasks;
