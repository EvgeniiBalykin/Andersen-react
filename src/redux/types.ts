import { addNameAction, deleteTaskAction, completeTaskAction, editTaskAction } from './actions';

export interface ITodo {
  text: string,
  id: uuid4,
  isComplete: boolean,

}

export interface IState {
  name: string;
  todos: ITodo[] | [];
};

export type uuid4 = string;

export type ReturnActionType = typeof addNameAction 
| typeof deleteTaskAction 
| typeof completeTaskAction 
| typeof editTaskAction;

export type ActionTypes = ReturnType<ReturnActionType>;