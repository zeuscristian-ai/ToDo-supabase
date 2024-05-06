import React from "react";

type Props = {};

const Todos: React.FC = ({}: Props) => {
  return (
    <>
      {false ? (
        <ul className="h-screen mt-6"></ul>
      ) : (
        <p className="text-4xl text-center mt-8">Pas de Todo 😭 </p>
      )}
    </>
  );
};

export default Todos;
