import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map(({ text, id, isCompleted }) => (
        <Todo
          id={id}
          text={text}
          isCompleted={isCompleted}
          key={id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
