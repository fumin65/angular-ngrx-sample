import {createFeatureSelector, createSelector} from '@ngrx/store';
import {todoListFeatureKey, TodoListState} from './todo-list.reducer';

const selectState = createFeatureSelector<TodoListState>(todoListFeatureKey);
export const selectTodoList = createSelector(selectState, state => state.todoList);
