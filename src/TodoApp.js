import { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoApp = ({ setIsLogged }) => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.length > 0) {
      const newTodo = {
        id: new Date().getUTCMilliseconds(),
        task: todo,
        completed: false,
        isEdit: false,
      };
      setTodo("");

      setTodos([newTodo, ...todos]);
    }
  };

  const handleEdit = (idx, updatedTask, isEdit) => {
    console.log({ idx, updatedTask, todos });

    const updatedTodo = { ...todos[idx], task: updatedTask, isEdit };

    const copiedTodos = JSON.parse(JSON.stringify(todos)); //doing deepClone/deepCopy hereF

    copiedTodos[idx] = updatedTodo;

    setTodos([...copiedTodos]);
  };

  const handleCompleted = (idx) => {
    console.log({ idx });

    const updatedTodo = { ...todos[idx], completed: true };

    const copiedTodos = JSON.parse(JSON.stringify(todos)); //doing deepClone/deepCopy hereF

    copiedTodos[idx] = updatedTodo;

    setTodos([...copiedTodos]);
  };

  const handleDelete = (idx) => {
    console.log({ idx });
    setTodos([...todos.filter((todo, id) => id !== idx)]);
  };

  return (
    <div>
      <input
        className="TextFields"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Task Here"
      />
      <button className="AddTodoButton" onClick={() => addTodo()}>
        {" "}
        Add Todo{" "}
      </button>{" "}
      <br />{" "}
      <TodoList
        todos={todos}
        setTodo={setTodo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleCompleted={handleCompleted}
      />{" "}
      <br />{" "}
      <button
        className="LogoutButton"
        onClick={() => {
          setIsLogged(false);
        }}
      >
        Logout{" "}
      </button>{" "}
    </div>
  );
};
