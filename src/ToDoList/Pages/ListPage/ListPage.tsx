import React, { useState } from "react";
import styles from "./listPage.module.scss";
import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../../Components/ToDo/ToDo";
import { FiCheck } from "react-icons/fi";
import { addTaskAction } from "../../../redux/actions";
import { v4 } from "uuid";
import { selectName } from "../../../redux/selectors";
import { selectIncompletedTodos } from './../../../redux/selectors';

function ListPage() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const name = useSelector(selectName);
  const todosInProgress = useSelector(selectIncompletedTodos);

  const addTask = () => {
    const task = {
      text: newTask,
      id: v4(),
      isComplete: false,
    };
    dispatch(addTaskAction(task));

    setNewTask("");
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.titleText}>
          Current Tasks: {todosInProgress.length}
        </span>
      </div>
      <div className={styles.taskAdd}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
        <Button
          className={styles.btnAdd}
          title={<FiCheck />}
          onClick={addTask}
        />
      </div>
        <ToDo />
    </div>
  );
}

export default ListPage;
