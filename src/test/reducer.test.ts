import reducer from "../redux/reducer";
import { addNameAction, addTaskAction, completeTaskAction, deleteTaskAction, editTaskAction } from "../redux/actions";

const initialState = {
  name: "",
  todos: [{
    text: 'test task',
    id: '5',
    isComplete: false
  }],
};

it('new name should be added', () => {
  let action = addNameAction('Test Name')

  let newState = reducer(initialState, action)

  expect(newState.name).toBe('Test Name')
})

it('new task should be added', () => {
  let action = addTaskAction({
    text: 'Test Task',
    id: '2',
    isComplete: false
  })

  let newState = reducer(initialState, action)

  expect(newState.todos.length).toEqual(2)
})

it('task should be deleted', () => {
  let action = deleteTaskAction('5')

  let newState = reducer(initialState, action)

  expect(newState.todos.length).toEqual(0)
})

it('task should be completed', () => {
  let action = completeTaskAction('5')

  let newState = reducer(initialState, action)

  expect(newState.todos[0].isComplete).toBe(true)
})

it('task should be added new text', () => {
  let action = editTaskAction({
    text: 'new text',
    id: '5',
    isComplete: false
  })

  let newState = reducer(initialState, action)

  expect(newState.todos[0].text).toBe('new text')
})

