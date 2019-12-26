import {Actions, createEffect, ofType} from '@ngrx/effects';
import {FetchTodoListUseCase} from '../../../../application/usecase/todo/fetch-todo-list.usecase';
import {loadedTodoList, loadTodoList} from './todo-list.actions';
import {map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoListEffects {

  load$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadTodoList),
      mergeMap(_ => this.fetchAllTodoUseCase.handle().pipe(
        map(todoList => todoList.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())),
        map(todoList => loadedTodoList({newTodoList: todoList}))
      ))
    )
  );

  constructor(
    private action$: Actions,
    private fetchAllTodoUseCase: FetchTodoListUseCase
  ) {
  }
}
