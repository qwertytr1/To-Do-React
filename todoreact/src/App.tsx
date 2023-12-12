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
  const deleteTodo = (id:number) => {
  setTodos(todos.filter((todo) => todo.id !==id))
  }
  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          // Update the text of the specified todo
          return { ...todo, title: newText };
        }
        return todo;
      })
    );
  };
  const addTodo = (texts: string[]) => {
    const newTodo:TodoInterface[] = texts.map((text, index) => ({
      id: todos.length + index + 1,
      title: text,
      isCompleted: false,
    }));
    console.log(newTodo);
    setTodos([...todos, ...newTodo]);
  };

  return (
    <div className='App'>
      <ToDoForm addTodo={addTodo}  />
      <ToDoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}

export type { TodoInterface };
export default App;