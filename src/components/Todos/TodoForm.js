import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = ev => {
    ev.preventDefault();
    if (!text) return;
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
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
