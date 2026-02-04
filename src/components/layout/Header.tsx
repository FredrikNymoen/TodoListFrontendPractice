import { useTodoStore } from "@/stores/todoStore";
import React, { useState } from "react";

const Header = () => {
  const {addTodo} = useTodoStore()
  const [todoTitle, setTodoTitle] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoTitle)
        setTodoTitle("")
      }}
      className="bg-blue-200 p-4 flex flex-col"
    >
      <label htmlFor="todoWrite" className="text-black font-bold">
        Write a todo
      </label>
      <input
        id="todoWrite"
        value={todoTitle}
        type="text"
        className="bg-white text-black p-2 rounded"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
    </form>
  );
};

export default Header;
