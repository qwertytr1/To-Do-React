import { makeObservable, observable, action } from 'mobx';
import localforage from 'localforage';

type TodoInterface = {
  id: number;
  title: string;
  isCompleted: boolean;
};

const TODOS_KEY = 'todos';

class TodoStore {
  todos: TodoInterface[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      updateTodos: action,
      checkTodo: action,
      deleteTodo: action,
      editTodo: action,
      addTodo: action,
    });
  }

  updateTodos(newTodos: TodoInterface[]) {
    // Convert the todos to plain JavaScript objects before storing
    const plainTodos = newTodos.map(({ id, title, isCompleted }) => ({
      id,
      title,
      isCompleted,
    }));

    this.todos = newTodos;
    localforage.setItem(TODOS_KEY, plainTodos);
  }
  checkTodo = (id: number) => {
    this.updateTodos(
      this.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  deleteTodo = (id: number) => {
    this.updateTodos(this.todos.filter((todo) => todo.id !== id));
  };

  editTodo = (id: number, newText: string) => {
    this.updateTodos(
      this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newText };
        }
        return todo;
      })
    );
  };

  addTodo = (texts: string[]) => {
    const newTodos: TodoInterface[] = texts.map((text, index) => ({
      id: this.todos.length + index + 1,
      title: text,
      isCompleted: false,
    }));
    this.updateTodos([...this.todos, ...newTodos]);
  };

  initializeFromStorage() {
    localforage.getItem<[]>(TODOS_KEY).then((storedTodos) => {
      if (storedTodos) {
        // Convert plain JavaScript objects back to TodoInterface objects
        const todoInterfaces: TodoInterface[] = storedTodos.map(({ id, title, isCompleted }) => ({
          id,
          title,
          isCompleted,
        }));
        this.todos = todoInterfaces;  // Update the state with the converted data
      }
    });
  }
}
export type { TodoInterface}
export default TodoStore;
