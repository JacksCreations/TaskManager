import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  var countID = 0;
  function genID() {
    countID += 1;
  }

  const onSubmit = (e) => {
    genID();
    onAdd({ id, name, description });

    console.log(id);
    console.log(name);
    console.log(description);

    setName('');
    setDescription('');
  };

  return (
    <form>
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
        <button type="submit" id="submitTask" onSubmit={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
