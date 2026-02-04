import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";
import {useTodoStore} from "@/stores/todoStore"

type TodoItemProps = {
  title: string;
}

const TodoItem = ({ title }: TodoItemProps) => {
  const {addTodo, removeTodo, editTodo} = useTodoStore()
  return (
    <Item variant="outline" className="w-full max-w-lg my-2">
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm" className="bg-red-500 text-white border-black" onClick={()=>removeTodo}>
            Delete
          </Button>
          <Button variant="outline" size="sm" className="bg-yellow-500 text-white border-black" onClick={()=>editTodo}>
            Edit
          </Button>
          <Button variant="outline" size="sm" className="bg-green-500 text-white border-black" onClick={()=>editTodo}>
            Done
          </Button>
        </ItemActions>
      </Item>
  )
}

export default TodoItem