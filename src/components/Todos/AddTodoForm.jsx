import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAsyncTodo } from "../../features/todo/todoSlice";

export default function AddTodoForm() {
  const [value, setValue] = useState("");
  const { loading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addAsyncTodo({ title: value }));
    setValue("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className={`form-inline mt-3 mb-4 ${loading && "opacity-50"}`}
    >
      <label htmlFor="name" className="mb-1">
        name
      </label>
      <input
        type="text"
        name=""
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control mb-2 mr-sm-2"
      />
      <button disabled={loading} type="submit" className="btn btn-primary mt-1">
        {loading ? "submiting.." : "submit"}
      </button>
    </form>
  );
}
