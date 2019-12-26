import {Action, createReducer, on} from '@ngrx/store';
import * as TodoRegisterFragmentActions from './todo-register.actions';

export interface TodoRegistrationState {
  readonly editable: boolean;
  readonly errorMessage: string;
}

export const idle: TodoRegistrationState = {
  editable: true,
  errorMessage: null
};

export const registering: TodoRegistrationState = {
  editable: false,
  errorMessage: null
};

const todoRegisterReducer = createReducer(
  idle,
  on(TodoRegisterFragmentActions.register, _ => registering),
  on(TodoRegisterFragmentActions.registered, _ => idle),
  on(TodoRegisterFragmentActions.failedToRegister, state => ({...state, editable: true, errorMessage: '登録出来ませんでした'}))
);

export const todoRegisterFeatureKey = 'todoRegisterState';

export function reducer(state: TodoRegistrationState, action: Action) {
  return todoRegisterReducer(state, action);
}
