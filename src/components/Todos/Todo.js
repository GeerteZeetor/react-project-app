import styles from './Todo.module.css';

export default function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <h4 className={styles.textTodo}>{todo}</h4>
    </div>
  );
}
