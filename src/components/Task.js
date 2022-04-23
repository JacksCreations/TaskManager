import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="taskBox">
      <h3 className="name">{task.name}</h3>
      <p className="user">By: {task.description}</p>
    </div>
  );
};

export default Task;
