import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    //validation
    if (name.length > 0) {
      //assigns each task a UUID
      var id = uuid();
      id = id.slice(0, 5);

      //set status
      let completed = false;
      onAdd({ id, name, description, completed });

      //console.log(id);
      console.log(name);
      //console.log(description);
      console.log(completed);
      setName('');
      setDescription('');
    } else {
      console.log('enter name of task');
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
        <button type="submit" id="addTask">
          ADD TASK
        </button>
      </div>
    </form>
  );
};

export default AddTask;
