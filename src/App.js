import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = text => {
    setTodos([...todos, text]);
  };
  const deleteTodoHandler = function (index) {
    setTodos(todos.filter((_, idx) => idx !== index));
  };
  return (
    <div className="App">
      <h1 className="">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList deleteTodo={deleteTodoHandler} todos={todos} />
    </div>
  );
}

export default App;
