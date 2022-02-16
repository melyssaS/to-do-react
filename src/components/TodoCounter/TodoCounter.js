import React from 'react';

const TodoCounter=({total,completed})=>{
    return(<h1>Has completado {total} de {completed} tarea</h1>)
}

export {TodoCounter}