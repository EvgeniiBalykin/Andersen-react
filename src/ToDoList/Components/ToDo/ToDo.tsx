import { useState } from "react";
import styles from "./todo.module.scss";
import Button from "../Buttons/Button";
import { useSelector } from "react-redux";
import useBindDispatch from "../../../hooks/useBindDispatch";
import { FiTrash, FiEdit3, FiCheck } from "react-icons/fi";
import Input from "../Input/Input";
import {
  completeTaskAction as _completeTaskAction,
  deleteTaskAction as _deleteTaskAction,
  editTaskAction as _editTaskAction,
} from "../../../redux/actions";
import { selectTodos } from "../../../redux/selectors";

function ToDo() {
  const [edit, setEdit] = useState<{id: string | null, editable: boolean}>({
    id: null,
    editable: false,
  });

  const completeTaskAction = useBindDispatch(_completeTaskAction);
  const deleteTaskAction = useBindDispatch(_deleteTaskAction);
  const editTaskAction = useBindDispatch(_editTaskAction);

  const todos = useSelector(selectTodos);
  const itemContainerStyle = (completed: boolean) =>
    completed ? styles.itemCompleted : styles.item;

  const handleCompleteTask = (id: string) => {
    completeTaskAction(id);
    setEdit((prevState) =>
      id === prevState.id ? { id: null, editable: false } : prevState
    );
  };

  const handleEditTask = (id: string) => {
    setEdit((prevState) => ({
      id,
      editable: id === prevState.id as string ? !prevState.editable : true,
    }));
  };

  return (
    <ul className={styles.list}>
      {
        todos.map((item) => {
          return (
            <li key={item.id} className={itemContainerStyle(item.isComplete)}>
              {edit.id === item.id && edit.editable ? (
                <Input
                  type="text"
                  value={item.text}
                  onChange={(e) =>
                    editTaskAction({ id: item.id, text: e.target.value })
                  }
                />
              ) : (
                <span>{item.text}</span>
              )}
              <div className={styles.buttons}>
                <Button
                  className={styles.buttonsEdit}
                  title={<FiEdit3 />}
                  onClick={() => handleEditTask(item.id)}
                />
                <Button
                  className={styles.buttonsDelete}
                  title={<FiTrash />}
                  onClick={() => deleteTaskAction(item.id)}
                />
                <Button
                  className={styles.buttonsComplete}
                  title={<FiCheck />}
                  onClick={() => handleCompleteTask(item.id)}
                />
              </div>
            </li>
          );
      })
    }
    </ul>
  )
}

export default ToDo;
