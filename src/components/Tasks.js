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
        if (uncompleted.length == 0) {
          return (
            <center>
              <h1 id="notasks">Congrats you have no tasks</h1>
            </center>
          );
        } else {
          return uncompleted.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} />
          ));
        }
      }
    } else if (feed == 2) {
      return completed.map((task) => (
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
