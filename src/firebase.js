//addTask to firebase test

import React, { useRef } from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { firestore } from '../firebase';
import { addDoc, collection } from '@firebase/firestore';

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const nameRef = useRef();
  const descRef = useRef();
  const ref = collection(firestore, 'task');

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(descRef.current.value);

    //validation
    if (name.length > 0) {
      //assigns each task a UUID
      var id = uuid();
      id = id.slice(0, 5);

      //set status
      let completed = false;
      onAdd({ id, name, description, completed });

      let data = {
        id: id,
        name: nameRef.current.value,
        description: descRef.current.value,
        completed: false,
      };
      try {
        addDoc(ref, data);
      } catch (e) {
        console.log(e);
      }

      //console.log(id);
      //console.log(name);
      //console.log(description);
      //console.log(completed);
      setName('');
      setDescription('');
    } else {
      console.log('enter name of task');
    }
  };

  return (
    <form onSubmit={handleSave}>
      <div className="mb-2">
        <label form="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          ref={name}
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
          ref={description}
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
