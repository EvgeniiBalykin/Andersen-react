import { ActionTypes, IState, ITodo } from "./types";
import {
  ADD_NAME,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
} from "./actionTypes";

export const initialState: IState = {
  name: "",
  todos: [],
};

const reducer = (state = initialState, action: ActionTypes): IState => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NAME:
      return {
        ...state,
        name: payload as string,
      };
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload as ITodo],
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isComplete: !todo.isComplete } : todo
        ),
      };
    case EDIT_TASK: {
      const { id, text } = payload as ITodo;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text } : todo
        ),
      };
    }

    default:
      return state;
  }
};

export default reducer;
