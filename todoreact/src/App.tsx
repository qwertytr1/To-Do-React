import ToDoForm from 'Components/ToDoForms';
import React, { useState } from 'react';
import ToDoList from 'Components/ToDoListt';

type TodoInterface = {
  id: number;
  title: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([
    {
      id: 1,
      title: "PLAY",
      isCompleted: false,
    },
    {
      id: 2,
      title: "PLAY",
      isCompleted: true,
    },
  ]);
  const checkTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };

  const addTodo = (texts: string[]) => {
    const newTodo:TodoInterface[] = texts.map((text) => ({
      id: todos.length  + 1,
      title: text,
      isCompleted: false,
    }));
    console.log(newTodo);
    setTodos([...todos, ...newTodo]);
  };

  return (
    <div className='App'>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} checkTodo={checkTodo} />
    </div>
  );
}

export type { TodoInterface };
export default App;