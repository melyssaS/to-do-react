import React, {useContext} from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

const TodoCounter=()=>{
    const {totalTodos,completedTodos} =useContext(TodoContext);
    return(<h1>Has completado {totalTodos} de {completedTodos} tarea</h1>)
}

export {TodoCounter}