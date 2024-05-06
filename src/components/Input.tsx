import React from "react";

const Input: React.FC = () => {
  return (
    <>
      <form className="flex mt-4 border h-12 shadow">
        <input
          className="text-xl h-full px-3 w-full"
          placeholder="créer une tache"
          type="text"
        />
        <button className="bg-gray-100 py-2 px-4 font-bold" type="submit">
          créer
        </button>
      </form>
    </>
  );
};

export default Input;
