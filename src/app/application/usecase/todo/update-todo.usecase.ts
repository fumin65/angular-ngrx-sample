import {TodoRepository} from '../../../domain/model/todo/todo-repository';
import {UpdateTodoCommand} from './update-todo-command';
import {TodoId} from '../../../domain/model/todo/todo-id';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateTodoUseCase {
  constructor(
    private repository: TodoRepository
  ) {
  }

  handle(command: UpdateTodoCommand): Promise<void> {
    return this.repository.todoOf(new TodoId(command.id))
      .then(todo => {
        todo.name = command.newName;
        return this.repository.update(todo);
      });
  }

}
