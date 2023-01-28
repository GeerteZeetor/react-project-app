import styles from './Todo.module.css';
import { RiTodoFill } from 'react-icons/ri';

export default function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <h3 className={styles.textTodo}>
        <RiTodoFill className={styles.todoIcon} />
        {todo}
      </h3>
    </div>
  );
}
