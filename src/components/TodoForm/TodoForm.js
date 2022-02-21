import React, { useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue]=useState("")
    const {addTodo,setOpenModal}= React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <label></label>
      <textarea placeholder="Coloca Algo aca" value={newTodoValue} onChange={(ev)=>setNewTodoValue(ev.target.value)}></textarea>
      <div>
        <button  type="button" onClick={onCancel}>Cancelar</button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
};

export {TodoForm}
