import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AddTodoUseCase} from '../../../../application/usecase/todo/add-todo.usecase';
import {failedToRegister, register, registered} from './todo-register.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class TodoRegisterEffects {

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      mergeMap(action => {
        return fromPromise(this.addTodoUseCase.handle(action.name)).pipe(
          map(_ => registered()),
          catchError(_ => of(failedToRegister()))
        );
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private addTodoUseCase: AddTodoUseCase
  ) {
  }
}
