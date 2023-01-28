import styles from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';

export default function Todo({ text, id, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(id)}>
      <h3 className={styles.textTodo}>
        <RiTodoFill className={styles.todoIcon} />
        {text}
      </h3>
    </div>
  );
}
