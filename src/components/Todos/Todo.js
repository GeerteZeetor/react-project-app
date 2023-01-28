import styles from './Todo.module.css';
export default function Todo({ todo }) {
  return <h4 className={styles.textTodo}>{todo}</h4>;
}
