import React, { useState } from "react";
import TodoTask from "./TodoTask";
import AddTodo from "./AddTodo";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addItem = (input) => {
    console.log(input);
    const task = { title: input, completed: false };
    let arr = [task, ...tasks];
    setTasks(arr);
  };
  const onDelete = (task) => {
    const newtasks = tasks.filter((element ) => {
     return element !== task;
    });
   console.log(setTasks(newtasks));
  };
  const onToggleComplete = (task) => {
    const newtasks =tasks.map((item)=>{
        if(item===task){
        task.completed=!task.completed;
        }
        return item;
    }) 

    setTasks(newtasks)      
  };   
  return (
    <div>
      <AddTodo addItem={addItem} />
      {tasks.map((task,index) => (
        <TodoTask key={index}
          onDelete={onDelete}
          task={task}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;