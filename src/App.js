import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  //test feed
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Clean room',
      description: 'Jacks room',
      completed: true,
    },
    {
      id: 2,
      name: 'Do Laundry',
      description: 'Jacks Laundry',
      completed: false,
    },
  ]);

  // Add Task
  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    task.completed = true;
  };

  /*
  const showCompleted = () => {
    setTasks(tasks.filter((task) => task.completed == completed));
  };
  */

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddTask onAdd={addTask} />
        </div>

        <div className="col-md-6">
          <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
