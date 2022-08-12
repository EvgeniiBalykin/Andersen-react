import {
  ADD_NAME,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from "./actionTypes";
import { ITodo, uuid4 } from "./types";


export function addNameAction(payload: string) {
  return {
    type: ADD_NAME,
    payload,
  };
}

export function addTaskAction(payload: ITodo) {
  return {
    type: ADD_TASK,
    payload,
  };
}

export function deleteTaskAction(payload: uuid4) {
  return {
    type: DELETE_TASK,
    payload,
  };
}

export function completeTaskAction(payload: uuid4) {
  return {
    type: COMPLETE_TASK,
    payload,
  };
}

export function editTaskAction(payload: ITodo) {
  return {
    type: EDIT_TASK,
    payload,
  };
}
