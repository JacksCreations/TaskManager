import React from 'react';
import { useState } from 'react';
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
    },
    {
      id: 2,
      name: 'Do Laundry',
      description: 'Jacks Laundry',
    },
  ]);

  // Add Task
  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
