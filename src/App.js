import { useState } from "react";
import { LoginForm } from "./LoginForm";
import "./styles.css";
import { TodoApp } from "./TodoApp";

const ErrorPrompt = ({ status }) => {
  return status ? "Invalid Entry" : null;
};

export default function App() {
  const [email, setEmail] = useState("bakar@gmail.com");
  const [password, setPassword] = useState("pass");

  const [isLoggedIn, setIsLogged] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    if (email === "bakar@gmail.com" && password === "pass") {
      setIsLogged(true);
      setEmail("");
      setPassword("");
    } else {
      setError(true);
    }
  };
  return (
    <>
      {" "}
      {isLoggedIn ? (
        <TodoApp setIsLogged={setIsLogged} />
      ) : (
        <div className="App">
          {" "}
          {error && <ErrorPrompt status={error} />}{" "}
          <LoginForm
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />{" "}
        </div>
      )}{" "}
    </>
  );
}
