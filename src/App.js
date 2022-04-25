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

  const [uncompleted, setUncompleted] = useState(
    tasks.filter((task) => task.completed == false)
  );

  const [completed, setCompleted] = useState(
    tasks.filter((task) => task.completed == true)
  );

  // Add Task
  const addTask = async (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (task) => {
    task.completed = true;
    setTasks([...tasks]);
    getUncompleted();
  };

  function updater() {
    useEffect(() => {
      console.log();
    });
  }

  const [feed, setFeed] = useState(0);
  //Shows all tasks

  function getAll() {
    setTasks(tasks);
    setFeed(0);
    console.log(feed);
  }

  //shows all completed tasks
  function getCompleted() {
    let completed = tasks.filter((task) => task.completed == true);
    setFeed(1);
    setCompleted(completed);
  }

  //shows all uncompleted tasks
  function getUncompleted() {
    let uncompleted = tasks.filter((task) => task.completed == false);
    setFeed(2);

    uncompleted.forEach((task, index) => {
      if (task.isCompleted === true) {
        uncompleted.splice(index, 1);
      }
    });

    setUncompleted(uncompleted);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddTask onAdd={addTask} />
        </div>
        <div className="col-md-6">
          <center>
            <h1 id="taskFeedTitle">TASK FEED</h1>
            <button className="feedButtons" onClick={() => getAll()}>
              All Tasks
            </button>
            <button className="feedButtons" o onClick={() => getUncompleted()}>
              To Do
            </button>
            <button className="feedButtons" onClick={() => getCompleted()}>
              Completed
            </button>
          </center>
          <Tasks
            tasks={tasks}
            uncompleted={uncompleted}
            completed={completed}
            onDelete={completeTask}
            feed={feed}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
