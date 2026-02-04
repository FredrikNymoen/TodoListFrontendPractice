import React from "react";

const Header = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("SUBMIT");
      }}
      className="bg-blue-200 p-4 flex flex-col"
    >
      <label htmlFor="todoWrite" className="text-black font-bold">
        Write a todo
      </label>
      <input
        id="todoWrite"
        type="text"
        className="bg-white text-black p-2 rounded"
      />
    </form>
  );
};

export default Header;
