import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Container,
  Input,
  ListItem,
  Completed,
  Delete,
} from "./StyleCo";

// id: uuid(), task: "", finished: true

export default function App() {
  const [list, setList] = useState([]); //será armazenada a task
  const [taskInput, setTaskInput] = useState("");

  function inputTask(e) {
    setTaskInput(e.target.value); //aqui será armazenada a task.
  }

  function addTask() {
    //nesta função ele pega a task armazenada e joga na tela a cada clicada

    if (!taskInput) {
      alert("Digite uma tarefa!");
    } else {
      setList([
        ...list, // sprad operator para adicionar um arra por vez a cada clicada!
        {
          id: uuid(),
          task: taskInput,
          finished: false,
        },
      ]);
    }
  }

  function endTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }
  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <Input>
        <input type="text" onChange={inputTask} />
        <Button onClick={addTask}>Add Task</Button>
      </Input>

      <ul>
        {list.length > 0 ? (
          list.map((item) => (
            <ListItem isFinished={item.finished} key={item.id}>
              <Completed onClick={() => endTask(item.id)} />
              <li>{item.task}</li>
              <Delete onClick={() => deleteTask(item.id)} />
            </ListItem>
          ))
        ) : (
          <h3>Have not task yet!</h3>
        )}
      </ul>
    </Container>
  );
}
