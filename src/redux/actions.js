import {
  ADD_NAME,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from "./actionTypes";

export function addNameAction(payload) {
  return {
    type: ADD_NAME,
    payload,
  };
}

export function addTaskAction(payload) {
  return {
    type: ADD_TASK,
    payload,
  };
}

export function deleteTaskAction(payload) {
  return {
    type: DELETE_TASK,
    payload,
  };
}

export function completeTaskAction(payload) {
  return {
    type: COMPLETE_TASK,
    payload,
  };
}

export function editTaskAction(payload) {
  return {
    type: EDIT_TASK,
    payload,
  };
}
