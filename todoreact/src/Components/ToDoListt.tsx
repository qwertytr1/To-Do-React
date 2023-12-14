
import React, { useState } from "react";
import Todo from "./Todo";
import {TodoInterface} from "./TodoStore"

interface TodoListProps {
  todos: TodoInterface[];
  checkTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const ToDoList: React.FC<TodoListProps> = ({ todos, checkTodo, deleteTodo, editTodo }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    // Toggle selected tags
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filterByTags = (todoTags: string[] | null | undefined) => {
    if (!selectedTags.length) {

      return true;
    }
    return todoTags?.some((tag) => selectedTags.includes(tag)) ?? false;
  };

  const filteredTodos = todos.filter((todo) => filterByTags(todo.title.match(/#\w+/g)));

  return (
    <div>
      <div>
        <h4>Filter by Tags:</h4>
        <div>
          {todos.reduce((allTags, todo) => {
            const tags = todo.title.match(/#\w+/g) || [];
            return allTags.concat(tags);
          }, [] as string[]).filter((tag, index, self) => self.indexOf(tag) === index).map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px",
                margin: "4px",
                cursor: "pointer",
                backgroundColor: selectedTags.includes(tag) ? "lightblue" : "transparent",
              }}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <button onClick={() => setSelectedTags([])}>Clear and return to other tasks</button>
      </div>
      <>
        {filteredTodos.map((todo, index) => (
          <Todo
            key={index}
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