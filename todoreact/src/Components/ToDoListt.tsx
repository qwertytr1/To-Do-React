import React from "react"
import Todo from "./Todo"
import { TodoInterface } from "App"


interface TodoListProps {
  todos: TodoInterface[];
  checkTodo:(id:number) => void;
}

const ToDoList: React.FC<TodoListProps> = ({ todos, checkTodo }) => {
  return (
    <div>
      <>
        {todos.map((todo) => (
           <Todo key={todo.id} title={todo.title} checkTodo={checkTodo} id={todo.id}
              isCompleted={todo.isCompleted} />
        ))}
      </>
    </div>
  );
}

export default ToDoList;