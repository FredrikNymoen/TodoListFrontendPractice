import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"

type TodoItem = {
    id: string
    title: string
    completed: boolean;
}

type TodoState = {
  todos: TodoItem[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, newTodo: string) => void;
  toggleTodo: (id: string) => void;
};

export const useTodoStore  = create<TodoState>((set) => ({
    todos: [], 
    addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, {id: uuidv4(), title: todo, completed: false}] })),
    removeTodo: (id: string) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
    editTodo: (id: string, newTodo: string) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? {...todo, title: newTodo} : todo)})),
    toggleTodo: (id: string) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo) }))
}))