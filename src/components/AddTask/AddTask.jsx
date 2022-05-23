import React from "react";
import styles from "./addTask.module.css";

import { useState } from 'react'
import Tasks from "../Tasks/Tasks";
import { TaskHeader } from "../TaskHeader";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const [task,setTask]=useState("");
  const[array,setArray]=useState([]);
  const[head,setHead]=useState(0)
  const invalue =(e)=>{
      console.log("skk",e.target.value);
      setTask(e.target.value);
      
  }
  const store =()=>{
  //  setArray([...array,task])
setArray([task,...array])

   console.log(array);
   
   setHead(head+1);
  
  }

  return (
   <>
    
     <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={invalue} />
      <button data-cy="add-task-button" onClick={store}>+</button>
      </div>
  
    <Tasks pass={array}/>
  
   </>
  );
};

export default AddTask;
