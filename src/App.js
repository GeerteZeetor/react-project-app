import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = text => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h2 className="textHeader">Todo App</h2>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
        <div>Login1</div>
        <div>Login2</div>
    </div>
  );
}

export default App;
