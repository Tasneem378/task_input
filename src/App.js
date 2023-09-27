import React from "react";
import "./index.css";
import TodoList from "./Component/TodoList";

function App() {
  return (
     <div className="App">
      <h1>Todo-List</h1>       
       <TodoList />
    </div>
  );
}

export default App;