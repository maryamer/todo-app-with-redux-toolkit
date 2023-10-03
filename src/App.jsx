import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
  return (
    <div className="container pt-3">
      <h1>TodoApp with redux-toolkit</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
