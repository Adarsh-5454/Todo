import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    title: "",
  });
  const [isEdit, setISEdit] = useState(false);
  return (
    <div>
      <AddTodo
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        setTodo={setTodo}
        isEdit={isEdit}
        setISEdit={setISEdit}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        setTodo={setTodo}
        isEdit={isEdit}
        setISEdit={setISEdit}
      />
    </div>
  );
};

export default App;
