import React from 'react';
import Task from './components/Task';

const TaskFeed = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <h1>Task feed</h1>
      {tasks.map((task) => (
        <Task task={task} onAdd={onAdd} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default TaskFeed;
