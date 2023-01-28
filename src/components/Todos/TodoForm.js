import { useState } from 'react';
import styles from './TodoForm.module.css';
export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = ev => {
    ev.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.todoFromContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={ev => setText(ev.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
