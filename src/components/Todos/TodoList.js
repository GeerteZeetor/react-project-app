import Todo from './Todo';
export default function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo todo={todo} key={index} />);
}
