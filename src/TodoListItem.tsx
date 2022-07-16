import React from "react";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {
  return (
    <li style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
      <label
        style={{textDecoration: todo.complete ? "line-through" : undefined}}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
      {/* <button style={{cursor: "pointer"}}>Edit</button> */}
      {/* <button style={{cursor: "pointer"}}>Delete</button> */}
    </li>
  );
};
