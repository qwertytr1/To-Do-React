import React from "react";
import Todo from "./Todo";
import { TodoInterface } from "App";

interface TodoListProps {
  todos: TodoInterface[];
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const ToDoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo, editTodo }) => {
  return (
    <div>
      <>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            editTodo={editTodo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        ))}
      </>
    </div>
  );
};

export default ToDoList;
