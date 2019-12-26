import {TodoRepository} from '../../../domain/model/todo/todo-repository';
import {Observable} from 'rxjs';
import {Todo} from '../../../domain/model/todo/todo';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchTodoListUseCase {

  constructor(
    private repository: TodoRepository
  ) {
  }

  handle(): Observable<Todo[]> {
    return this.repository.todoList();
  }
}
