import { useState } from "react";

export const TodoList = ({
  todos,
  handleDelete,
  handleEdit,
  handleCompleted,
}) => {
  const [task, updateTask] = useState("");

  //   const editTask = (id) => {
  //     // selectedId(id);
  //     updateTask(todos[id].task);

  //     console.log({ todos, id });
  //   };

  return (
    <div>
      {todos.map((todo, idx) => (
        <h1 key={todo.task} key={idx}>
          <button
            className="btn"
            onClick={() => handleCompleted(idx, task, true)}
          >
            <i className="fa fa-check"> </i>
          </button>
          &nbsp;
          {!todo.isEdit ? (
            todo.completed ? (
              <s>{todo.task}</s>
            ) : (
              <span>{todo.task}</span>
            )
          ) : (
            <>
              <input
                type="text"
                onChange={(e) => updateTask(e.target.value)}
                value={task}
              />
              <button
                className="btn"
                onClick={() => handleEdit(idx, task, false)}
              >
                <i className="fa fa-save"> </i>
              </button>
              &nbsp;
            </>
          )}
          <button
            className="btn"
            onClick={() => {
              updateTask(todo.task);
              handleEdit(idx, task, true);
            }}
          >
            <i className="fa fa-edit"> </i>
          </button>
          <span> </span>
          <button className="btn" onClick={() => handleDelete(idx)}>
            <i className="fa fa-trash"> </i>
          </button>
        </h1>
      ))}
    </div>
  );
};
