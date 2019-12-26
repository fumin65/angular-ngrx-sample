import {Todo} from '../../../../domain/model/todo/todo';
import {Action, createReducer, on} from '@ngrx/store';
import {loadedTodoList} from './todo-list.actions';

export interface TodoListState {
  readonly todoList: Todo[];
}

export const initial: TodoListState = {
  todoList: []
};

const todoListReducer = createReducer(
  initial,
  on(loadedTodoList, (state, {newTodoList}) => ({...state, todoList: newTodoList}))
);

export const todoListFeatureKey = 'todoListState';

export function reducer(state: TodoListState, action: Action) {
  return todoListReducer(state, action);
}
