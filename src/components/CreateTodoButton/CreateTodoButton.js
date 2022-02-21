import React from "react";

const CreateTodoButton = (props) => {
  const onCreateTodo = () => {
      props.setOpenModal(prevState=>!prevState);
  };
  return <button onClick={onCreateTodo}>+</button>;
};

export { CreateTodoButton };
