import Button from "components/Button";
import styles from "./AddTask.module.scss";
import { useState } from "react";
import { AppUseContext } from "contents";

export default function AddTask() {
  const [inputData, setInputData] = useState("");
  const [erro, setErro] = useState("");
  const { handleTaskAddition } = AppUseContext();
  function handleInputChange(event) {
    setInputData(event.target.value);
  }
  function handleAddTask() {
    if (!inputData) {
      setErro("Escreva uma Tarefa");
      return false;
    } else {
      handleTaskAddition(inputData);
      setInputData("");
      setErro("");
    }
  }

  return (
    <>
      <section className={styles.addTaskContainer}>
        <input onChange={handleInputChange} value={inputData} type="text" />
        <div className={styles.buttonContainer}>
          <Button onClick={handleAddTask}>Adicionar</Button>
        </div>
      </section>
      {erro && <p style={{ color: "deeppink", fontWeight: "bold" }}>{erro}</p>}
    </>
  );
}
