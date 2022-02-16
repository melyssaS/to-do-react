import React, { useState } from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { id: 1, text: "Bañarme", completed: true },
  { id: 2, text: "Estudiar", completed: false },
  { id: 3, text: "Comer", completed: false },
  { id: 4, text: "Dormir", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=> {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
     return todoText.includes(searchText);
    })
  }

  const completeTodo = (id)=>{
    const todoIndex = todos.findIndex(todo=> todo.id===id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed=true;
    setTodos(newTodos);
  }


  const deleteTodo = (id)=>{
    const todoIndex = todos.findIndex(todo=> todo.id===id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
    <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={ setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
    />
    </React.Fragment>
  );
}

export {App}
