import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    onAdd({ name, description });

    //console.log(name);
    //console.log(description);

    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="col-md-6">
        <label form="taskTitle" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="contentInput" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="contentInput"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <button type="submit" id="submitTask">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
