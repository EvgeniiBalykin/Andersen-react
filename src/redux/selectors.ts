import { IState } from "./types";

const selectState = (state: IState) => state;

export const selectTodos = (state: IState) => selectState(state).todos;

export const selectName = (state: IState) => selectState(state).name;

export const selectIncompletedTodos = (state: IState) => selectState(state).todos.filter((todo: any) => todo.isComplete === false);