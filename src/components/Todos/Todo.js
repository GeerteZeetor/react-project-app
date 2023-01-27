import styles from "./Todo.module.css";

export default function Todo({ todo }) {
  return <h3 className={styles.textTodo}>{todo}</h3>;
}
