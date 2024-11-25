import React from "react";
import { useState } from "react";
import styles from "./AddToDo.module.css";

const AddTodo = (props) => {
  const { setTodo, todo, todos, setTodos, isEdit, setISEdit } = props;
  // const [todo, setTodo] = useState("");

  const [isTodo, setIsTodo] = useState(true);
  const addTodoHandler = () => {
    // if (todo !== "") {
    if (todo.title !== "") {
      setIsTodo(true);
      props.setTodos((prev) => [...prev, todo]);
      // setTodo("");
      setTodo({
        id: "",
        title: "",
      });
    } else {
      setIsTodo(false);
    }
  };
  const updateTodo = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id == todo.id ? { ...item, title: todo.title } : item
      )
    );
    console.log(todo);
    console.log(todos);
    setISEdit(false);
    setTodo({ id: "", title: "" });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={todo.title}
        // value={todo}
        onChange={(e) => {
          // setTodo(e.target.value)
          setTodo({
            id: !isEdit ? Math.random() : todo.id,
            title: e.target.value,
          });
        }}
      />
      {!isTodo && (
        <p style={{ fontSize: "15px", color: "red" }}> Error: Todo is empty</p>
      )}
      {!isEdit ? (
        <button className={styles.Button} onClick={addTodoHandler}>
          Add Todo
        </button>
      ) : (
        <button className={styles.Button} onClick={updateTodo}>
          Update
        </button>
      )}
    </div>
  );
};

export default AddTodo;
