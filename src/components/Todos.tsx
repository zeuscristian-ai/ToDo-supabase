import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, toggleCheck, handleDelete }) => {
  return (
    <>
      {todos.length ? (
        <ul className="h-screen mt-6">
          {todos.map((todo) => (
            <Todo
              handleDelete={handleDelete}
              toggleCheck={toggleCheck}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      ) : (
        <p className="text-4xl text-center mt-8">Pas de Todo 😭 </p>
      )}
    </>
  );
};

export default Todos;
