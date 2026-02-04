import {useTodoStore} from "@/stores/todoStore"
import TodoItem from "../todo/TodoItem";

const TodoList = () => {
  const {todos} = useTodoStore()

  return (
    <div className="px-4 mt-2 gap-2 flex flex-col items-center">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodoList;
