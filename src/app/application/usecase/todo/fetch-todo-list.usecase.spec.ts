import {TodoRepository} from '../../../domain/model/todo/todo-repository';
import {FetchTodoListUseCase} from './fetch-todo-list.usecase';

describe('FetchTodoListUseCase', () => {
  it('should call todoList method of repository.', () => {
    const repository = jasmine.createSpyObj('TodoRepository', ['todoList']);
    repository.todoList.and.returnValue(null);
    const useCase = new FetchTodoListUseCase(repository);
    useCase.handle();
    expect(repository.todoList.calls.count()).toBe(1);
  });
});
