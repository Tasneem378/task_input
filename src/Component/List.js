import React, { useState } from "react";
import Task from "./Task";
import InputTask from "./InputTask";

function List() {
  const [tasks, setTasks] = useState([]);

  const addItem = (input) => {
    console.log(input);
    const task = { title: input, completed: false };
    let arr = [task, ...tasks];
    setTasks(arr);
  };
  const onDelete = (task) => {
    const newtasks = tasks.filter((item ) => {
     return item !== task;
    });
   console.log(setTasks(newtasks));
  };
  const onToggleComplete = (task) => {
    const newarr=tasks.map((t, completed)=>{
      if(t.title===completed)
      return task.completed
             
        setTasks([...tasks,t.completed, !t.completed]);        
                                    
    }) 
    console.log(setTasks(newarr));      
  };   
  return (
    <div>
      <InputTask addItem={addItem} />
      {tasks.map((task) => (
        <Task
          onDelete={onDelete}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default List;

