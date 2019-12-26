import {Todo} from './todo';
import {Observable} from 'rxjs';
import {TodoId} from './todo-id';

export abstract class TodoRepository {
  abstract add(todo: Todo): Promise<void>;

  abstract todoList(): Observable<Todo[]>;

  abstract update(todo: Todo): Promise<void>;

  abstract newId(): Promise<TodoId>;

  abstract todoOf(id: TodoId): Promise<Todo>;
}
