import React from "react";

export default function TodoItem({ id, title, completed }) {
  return (
    <li className={`list-group-item ${completed && ""}`}>
      <div className="d-flex justify-content-center gap-1">
        <input type="checkbox" checked={completed} className="mr-3" />
        <span>{title}</span>
      </div>
      <button className="btn btn-danger">Delete</button>
    </li>
  );
}
