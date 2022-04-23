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
    let completed = tasks.filter((task) => task.completed == true);
    return completed.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
    ));
  }

  //shows all uncompleted tasks
  function getUncompleted() {
    let uncompleted = tasks.filter((task) => task.completed == false);
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
        <center>
          <button className="feedButtons" onClick={() => setFeed(getAll())}>
            All Tasks
          </button>
          <button
            className="feedButtons"
            o
            onClick={() => setFeed(getUncompleted())}
          >
            To Do
          </button>
          <button
            className="feedButtons"
            onClick={() => setFeed(getCompleted())}
          >
            Show Completed
          </button>
        </center>
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
