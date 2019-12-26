import {TodoRepository} from '../../domain/model/todo/todo-repository';
import {Todo} from '../../domain/model/todo/todo';
import {BehaviorSubject, Observable} from 'rxjs';
import {TodoId} from '../../domain/model/todo/todo-id';
import * as uuid from 'uuid';

export class MemoryTodoRepository implements TodoRepository {

  private todoSubject = new BehaviorSubject<Todo[]>([]);
  private todoCache: Todo[] = [];

  async add(todo: Todo): Promise<void> {
    this.todoCache.push(todo);
    this.todoSubject.next(this.todoCache.slice());
  }

  todoList(): Observable<Todo[]> {
    return this.todoSubject;
  }

  async update(todo: Todo): Promise<void> {
    const index = this.todoCache.findIndex(t => t.id.value === todo.id.value);
    if (index < 0) {
      return;
    }
    this.todoCache[index] = todo;
    this.todoSubject.next(this.todoCache.slice());
  }

  async newId(): Promise<TodoId> {
    return new TodoId(uuid.v4());
  }

  async todoOf(id: TodoId): Promise<Todo> {
    return this.todoCache.find(todo => todo.id.value === id.value);
  }

}
