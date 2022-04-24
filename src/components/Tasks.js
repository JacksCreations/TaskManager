import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, onDelete, completed, uncompleted, feed }) => {
  function displayFeed() {
    if (feed == 0) {
      {
        return tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ));
      }
    } else if (feed == 1) {
      {
        return completed.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ));
      }
    } else if (feed == 2) {
      return uncompleted.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ));
    }
  }
  /*
  const [feed, setFeed] = useState(getAll());
  //update view
  function updateAll() {
    useEffect(() => {
      setFeed(getAll);
    });
  }

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
*/
  return (
    <div className="TaskBox">
      <center>
        <h1 id="taskFeedTitle">TASK FEED</h1>
      </center>

      <div>{displayFeed()}</div>
    </div>
  );
};
export default Tasks;

/*

{tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}


*/
