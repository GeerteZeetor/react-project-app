import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin5Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

export default function Todo({
  text,
  id,
  deleteTodo,
  toggleTodo,
  isCompleted,
}) {
  return (
    <div
      className={`${styles.todo} ${isCompleted ? styles.completedTodo : ''}`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin5Line
        onClick={() => deleteTodo(id)}
        className={styles.deleteIcon}
      />
      <FaCheck onClick={() => toggleTodo(id)} className={styles.checkIcon} />
    </div>
  );
}
