import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = text => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
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

  const resetTodoHandler = function () {
    setTodos([]);
  };

  const deleteCompleteTodoHandler = function (isCompleted) {
    setTodos(todos.filter(value => value.isCompleted === false));
  };
  const completedTodosCount = todos.filter(value => value.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm todos={todos} addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodo={resetTodoHandler}
          deleteCompletedTodo={deleteCompleteTodoHandler}
          todos={todos}
          completedTodoExist={!!completedTodosCount}
        />
      )}
      <TodoList
        deleteTodo={deleteTodoHandler}
        todos={todos}
        toggleTodo={toggleTodoHandler}
      />

      {!!completedTodosCount && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount === 1 ? 'todo' : 'todos'
        }!`}</h2>
      )}
    </div>
  );
}

export default App;
