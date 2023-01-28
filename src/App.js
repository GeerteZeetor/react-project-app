import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = text => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = function (id) {
    setTodos(todos.filter(value => value.id !== id));
  };
  return (
    <div className="App">
      <h1 className="">Todo App</h1>
      <TodoForm todos={todos} addTodo={addTodoHandler} />
      <TodoList deleteTodo={deleteTodoHandler} todos={todos} />
    </div>
  );
}

export default App;
