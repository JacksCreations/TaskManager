import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    //assigns each task a UUID
    var id = uuid();
    id = id.slice(0, 5);
    onAdd({ id, name, description });

    //console.log(id);
    //console.log(name);
    //console.log(description);

    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <center>
        <label id="formLabel">Task Manager</label>
      </center>
      <div className="mb-2">
        <label form="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="contentInput" className="form-label">
          Notes
        </label>
        <textarea
          className="form-control"
          id="contentInput"
          rows="2"
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
