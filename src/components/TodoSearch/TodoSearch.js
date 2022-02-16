import React, { useState } from "react";

const TodoSearch = ({searchValue, setSearchValue}) => {
 

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
