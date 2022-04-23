import React from 'react';
import { useState } from 'react';
import './style.css';
import AddTask from './components/AddTask';
import TaskFeed from './components/TaskFeed';
import Task from './components/Task';

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddTask></AddTask>
        </div>

        <div className="col-md-6">
          <TaskFeed tasks={tasks}></TaskFeed>
        </div>
      </div>
    </div>
  );
};

export default App;