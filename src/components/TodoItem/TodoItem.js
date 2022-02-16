import React from 'react';

const TodoItem=(props)=>{
    return     <li>
    <span onClick={props.onComplete}>√</span>
    <p>{props.text}</p>
    <span onClick={props.onDelete}>X</span>
  </li>
    
    

}

export {TodoItem}