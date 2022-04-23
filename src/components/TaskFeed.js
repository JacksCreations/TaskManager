import React from 'react';
import Task from './components/Task';

const TaskFeed = ({ posts, onAdd, onDelete }) => {
  return (
    <div>
      <h1>Task feed</h1>
      <Task />
    </div>
  );
};
export default TaskFeed;
