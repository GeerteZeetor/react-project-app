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
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const deleteTodoHandler = function (id) {
    setTodos(todos.filter(value => value.id !== id));
  };

  const toggleTodoHandler = function (id) {
    setTodos(
      todos.map(value =>
        value.id === id
          ? { ...value, isCompleted: !value.isCompleted }
          : { ...value }
      )
    );
  };

  return (
    <div className="App">
      <h1 className="">Todo App</h1>
      <TodoForm todos={todos} addTodo={addTodoHandler} />
      <TodoList
        deleteTodo={deleteTodoHandler}
        todos={todos}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
