import React, { useState } from "react";
import * as HiIcons from "react-icons/hi";

const Todo = ({ todo, toggleCheck, handleDelete }) => {
  return (
    <li className="flex w-full items-center mb-4">
      <input
        onChange={() => toggleCheck(todo.id)}
        className="w-10 h-10 mr-4"
        id="checkbox"
        type="checkbox"
        checked={todo.status}
      />
      <label
        className={`text-4xl mr-auto ${todo.status ? "line-through" : ""}`}
      >
        {todo.title}
      </label>
      <span
        className="w-10 h-10 block cursor-pointer"
        onClick={() => handleDelete(todo.id)}
      >
        <HiIcons.HiTrash className="w-full h-full" />
      </span>
    </li>
  );
};

export default Todo;
