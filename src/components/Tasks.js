import React from 'react';
import Task from './Task';
import { useState } from 'react';

const Tasks = ({ tasks, onDelete }) => {
  const [feed, setFeed] = useState(getAll());

  //Shows all tasks
  function getAll() {
    return tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ));
  }

  //shows all completed tasks
  function getCompleted() {
    let completed = tasks.filter((task) => task.completed == false);
    return completed.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ));
  }

  //shows all uncompleted tasks
  function getUncompleted() {
    let uncompleted = tasks.filter((task) => task.completed == true);
    return uncompleted.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ));
  }

  return (
    <div className="TaskBox">
      <center>
        <h1 id="taskFeedTitle">TASK FEED</h1>
      </center>

      <div>
        <button onClick={() => setFeed(getAll())}>All Tasks</button>
        <button onClick={() => setFeed(getCompleted())}>Show Completed</button>
        <button onClick={() => setFeed(getUncompleted())}>To Do</button>
        {feed}
      </div>
    </div>
  );
};
export default Tasks;

/*

{tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}


*/
