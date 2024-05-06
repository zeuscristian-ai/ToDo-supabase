import React from "react";

const Input = ({ addTodos, setContent, content, inputRef }) => {
  return (
    <>
      <form onSubmit={addTodos} className="flex mt-4 border h-12 shadow">
        <input
          ref={inputRef}
          onChange={(e) => setContent(e.target.value)}
          className="text-xl h-full px-3 w-full"
          placeholder="créer une tache"
          type="text"
          value={content}
        />
        <button
          onClick={() => inputRef.current.focus()}
          className="bg-gray-100 py-2 px-4 font-bold"
          type="submit"
        >
          créer
        </button>
      </form>
    </>
  );
};

export default Input;
