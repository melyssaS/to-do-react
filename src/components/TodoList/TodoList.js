import PreviousMap from "postcss/lib/previous-map";
import React from "react";

const TodoList = ({ children, ...props }) => {
  return (
    <ul>
      {children}
    </ul>
  );
};

export { TodoList };
