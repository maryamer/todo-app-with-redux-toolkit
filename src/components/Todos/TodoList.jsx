import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../../features/todo/todoSlice";

// const todos = [
//   { id: 1, title: "todo 1", completed: false },
//   { id: 2, title: "todo 2", completed: false },
// ];
function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <h2>todoList</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
