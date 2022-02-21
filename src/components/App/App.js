import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider } from "../TodoContext/TodoContext";

// const defaultTodos = [
//   { id: 1, text: "Bañarme", completed: true },
//   { id: 2, text: "Estudiar", completed: false },
//   { id: 3, text: "Comer", completed: false },
//   { id: 4, text: "Dormir", completed: false },
// ];
// // LOGICA DE PERSISTENCIA NO DEBE MOLESTAR A LA LOGICA DE LA APLICACION

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export { App };
