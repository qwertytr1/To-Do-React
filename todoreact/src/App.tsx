import ToDoForm from 'Components/ToDoForms';
import React,{ useState } from 'react';
import ToDoList from 'Components/ToDoListt';
type todoInterface = {
  id: number,
  title: string,
  isCompleted:boolean
};
function App() {
  const [todo, SetTodos] = useState<todoInterface[]>([
    {
      id: 1,
      title: "PLAY",
      isCompleted:false
    },
    {
      id: 2,
      title: "PLAY",
      isCompleted:true
    }
  ])
  return (
    <div className='App'>
      <ToDoForm />
      <ToDoList todos={todo} />
    </div>

  );
}
export type {todoInterface};
export default App;
