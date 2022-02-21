import React, {  useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoSearch = () => {
 const {searchValue, setSearchValue} = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <><input
      placeholder="cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
    {searchValue}</>
  );
};

export { TodoSearch };
