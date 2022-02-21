import React, { useContext } from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>Estamos Cargando, no desesperes</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}
        {error && <p>Desesperate, hubo un error...</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
         <TodoForm/>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
