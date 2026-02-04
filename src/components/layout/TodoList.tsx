import {useTodoStore} from "@/stores/todoStore"
import TodoItem from "../todo/TodoItem";

const TodoList = () => {
  const {todos, addTodo, removeTodo, editTodo} = useTodoStore()

  return (
    <div className="px-4 flex justify-center">
      {todos.map((todo) => (
        <TodoItem title={todo}/>
      ))}
    </div>
  );
};

export default TodoList;
