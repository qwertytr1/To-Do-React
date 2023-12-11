import React from "react"
import Todo from "./Todo"
import { todoInterface } from "App"
const ToDoList = ({ todos }: { todos: todoInterface[] }) => {
    return (

            <div>
            <>
            {todos.map((todo) => {
               return <Todo key={todo.id} title={todo.title} />
            })}
   </> </div>)
}
export default ToDoList;