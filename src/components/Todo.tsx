import React from "react";

const Todo: React.FC = () => {
  return (
    <li className="flex w-full items-center mb-4">
      <input className="w-10 h-10 mr-4" id="checkbox" type="checkbox" />
      <label className={`text-4xl mr-auto  "line-through" : ""}`}>
        je suis une todo
      </label>
      <span className="w-10 h-10 block cursor-pointer">suppr</span>
    </li>
  );
};

export default Todo;
