import {createAction, props} from '@ngrx/store';

const fragmentName = '[Todo Register Fragment]';
const effectsName = '[Todo Register Effects]';

export const register = createAction(`${fragmentName} Register`, props<{ name: string }>());
export const registered = createAction(`${effectsName} Registered`);
export const failedToRegister = createAction(`${effectsName} Failed to register`);
