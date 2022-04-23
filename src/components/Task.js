import React from 'react';

const Task = ({ task, onDelete }) => {
  function detectNotes() {
    let isEmpty = String(task.description).length;
    if (isEmpty > 0) {
      return <div className="notes">Notes: {task.description}</div>;
    }
  }

  return (
    <div className="taskBox">
      <h3 className="name">
        {task.name}
        <button className="complete" onClick={() => onDelete(task.id)}>
          ✓
        </button>
      </h3>
      <div>{detectNotes()}</div>
    </div>
  );
};

export default Task;
