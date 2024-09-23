import React from "react";

export const Input = ({ handleAdd, handleInput }) => {
  return (
    <div>
      <h1 className="title">待办事项</h1>
      <input type="text" onChange={handleInput} />
      <button onClick={handleAdd}>添加待办事项</button>
    </div>
  );
};
