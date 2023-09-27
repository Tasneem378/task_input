import React, { useRef, useState } from "react";

function AddTodo(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    props.addItem(input);
    setInput("");
    inputRef.current.focus();
  }; 
  return (
    <>
      <input type="text" ref={inputRef} value={input} onChange={handleChange} />
      <button onClick={handleClick}>ADD</button>          
    </>
    
  );
}

export default AddTodo;


