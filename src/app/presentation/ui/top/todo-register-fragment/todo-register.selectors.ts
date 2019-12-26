import {createFeatureSelector, createSelector} from '@ngrx/store';
import {todoRegisterFeatureKey, TodoRegistrationState} from './todo-register.reducer';

export const selectState = createFeatureSelector<TodoRegistrationState>(todoRegisterFeatureKey);
export const selectEditable = createSelector(selectState, state => state.editable);
export const selectErrorMessage = createSelector(selectState, state => state.errorMessage);
