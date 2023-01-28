import { RiDeleteBin5Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
export default function TodosActions({
  resetTodo,
  deleteCompletedTodo,
  todos,
  completedTodoExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button>
        <RiRefreshLine title="Reset todos" onClick={() => resetTodo()} />
      </Button>
      <Button>
        <RiDeleteBin5Line
          title="Clear completed todos"
          onClick={() => deleteCompletedTodo(todos.isCompleted)}
          disabled={!completedTodoExist}
        />
      </Button>
    </div>
  );
}
