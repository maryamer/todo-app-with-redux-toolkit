import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, toggleTodo, deleteTodo } from "../../features/todo/todoSlice";

export default function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <li key={id} className={`list-group-item ${completed && "bg-info"}`}>
      <div className="d-flex justify-content-center gap-1">
        <input
          type="checkbox"
          onChange={() => dispatch(toggleTodo({ id: id }))}
          checked={completed}
          className="mr-3"
        />
        <span>{title}</span>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(deleteTodo({ id: id }))}
      >
        Delete
      </button>
    </li>
  );
}
