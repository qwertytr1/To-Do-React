import React, { useState, useEffect } from 'react';
import ToDoForm from 'Components/ToDoForms';
import ToDoList from 'Components/ToDoListt';
import localforage from 'localforage';

type TodoInterface = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const TODOS_KEY = 'todos';

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    localforage.getItem<TodoInterface[]>(TODOS_KEY).then((storedTodos) => {
      if (storedTodos) {
        setTodos(storedTodos);
      }
    });
  }, []);

  const updateTodos = (newTodos: TodoInterface[]) => {
    setTodos(newTodos);
    localforage.setItem(TODOS_KEY, newTodos);
  };

  const checkTodo = (id: number) => {
    updateTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    updateTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newText };
        }
        return todo;
      })
    );
  };

  const addTodo = (texts: string[]) => {
    const newTodos: TodoInterface[] = texts.map((text, index) => ({
      id: todos.length + index + 1,
      title: text,
      isCompleted: false,
    }));
    updateTodos([...todos, ...newTodos]);
  };

  return (
    <div className='App'>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export type { TodoInterface };
export default App;