import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  console.log("sss", props);
  let a = props.pass;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}

        {a.map((b) => (
          <div>
            <h2 style={{border:"1px solid black"}}>{b}
            <Task/>
            </h2>
            {/* <Tasks/> */}
            
          </div>
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
