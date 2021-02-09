import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import "./Todo.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads we need to listen to the database and fetch new todos
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // Will stop the refresh

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput(""); // will clear the input after push button
  };

  return (
    <div className="App">
      <h1>TODO !</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="secondary">
          Add Todo
        </Button>
      </form>
      <div className="box">
        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
