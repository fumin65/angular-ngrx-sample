import {createAction, props} from '@ngrx/store';
import {Todo} from '../../../../domain/model/todo/todo';

const fragmentName = '[Todo List Fragment]';
const effectsName = '[Todo List Effects]';

export const loadTodoList = createAction(`${fragmentName} Load Todo list`);
export const loadedTodoList = createAction(`${effectsName} Loaded Todo list`, props<{ newTodoList: Todo[] }>());

