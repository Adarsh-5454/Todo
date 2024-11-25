import React, { useState } from "react";
import styled from "styled-components";

const Editbuttton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const Deletebutton = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TodoList = (props) => {
  const { setTodos, todos, todo, setTodo, setISEdit } = props;

  function editHandler(id) {
    const editHandler = todos.filter((item) => item.id === id);
    props.setTodo({ id: editHandler[0].id, title: editHandler[0].title });
    setISEdit(true);
    console.log(todo);
  }
  const deleteTodoHandler = (id) => {
    // const filteredTodos = todos.filter((todo) => todo !== item);
    // setTodos(filteredTodos);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {/* <li> key={item} */}
            {/* <p>{item}</p> */}
            <p>{item.title}</p>
            <Editbuttton onClick={() => editHandler(item.id)}>Edit</Editbuttton>
            <Deletebutton onClick={() => deleteTodoHandler(item.id)}>
              Delete
            </Deletebutton>
            {/* <button onClick={() => deleteTodoHandler(item)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
