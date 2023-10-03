import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import { store } from "./features/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="container pt-3">
        <h1>TodoApp with redux-toolkit</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
