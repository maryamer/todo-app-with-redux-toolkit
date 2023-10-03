import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  getAsyncTodos,
} from "../../features/todo/todoSlice";
import { useEffect } from "react";

function TodoList() {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);
  return (
    <div>
      <h2>todoList</h2>
      {loading ? (
        <p>loading... </p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
