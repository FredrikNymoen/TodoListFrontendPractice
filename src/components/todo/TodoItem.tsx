import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import { useTodoStore } from "@/stores/todoStore";
import { useState } from "react";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  const { removeTodo, editTodo, toggleTodo } = useTodoStore();

  const [isEditing, setIsEditing] = useState(false);
  const [todoDraft, setTodoDraft] = useState("");

  const save = () => {
    editTodo(id, todoDraft);
    setIsEditing(false);
    setTodoDraft("");
  };

  return (
    <Item variant="outline" className="w-full max-w-lg">
      {isEditing ? (
        <input
          className="flex-1 p-2"
          autoFocus
          type="text"
          value={todoDraft}
          onChange={(e) => setTodoDraft(e.target.value)}
          onBlur={() =>
            todoDraft === "" ? setIsEditing(false) : save()
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
          }}
        />
      ) : (
        <ItemContent>
          <ItemTitle className={completed ? "line-through opacity-60" : ""}>
            {title}
          </ItemTitle>
        </ItemContent>
      )}

      <ItemActions>
        <Button
          variant="outline"
          size="sm"
          className="bg-red-500 text-white border-black"
          onClick={() => removeTodo(id)}
        >
          Delete
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-yellow-500 text-white border-black"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-green-500 text-white border-black"
          onClick={() => toggleTodo(id)}
        >
          {completed ? "Undo" : "Done"}
        </Button>
      </ItemActions>
    </Item>
  );
};

export default TodoItem;
