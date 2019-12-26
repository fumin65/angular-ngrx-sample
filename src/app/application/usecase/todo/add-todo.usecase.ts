import {Injectable} from '@angular/core';
import {TodoRepository} from '../../../domain/model/todo/todo-repository';
import {Todo} from '../../../domain/model/todo/todo';

@Injectable({
  providedIn: 'root'
})
export class AddTodoUseCase {

  constructor(
    private repository: TodoRepository
  ) {
  }

  handle(todoName: string): Promise<void> {
    return this.repository.newId()
      .then(id => new Todo(id, todoName, new Date()))
      .then(todo => this.repository.add(todo));
  }

}
