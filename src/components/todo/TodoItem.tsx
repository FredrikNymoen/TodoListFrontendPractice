import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item";

const TodoItem = () => {
  return (
    <Item variant="outline" className="w-full max-w-lg my-2">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm" className="bg-red-500 text-white border-black">
            Delete
          </Button>
          <Button variant="outline" size="sm" className="bg-yellow-500 text-white border-black">
            Edit
          </Button>
          <Button variant="outline" size="sm" className="bg-green-500 text-white border-black  ">
            Done
          </Button>
        </ItemActions>
      </Item>
  )
}

export default TodoItem