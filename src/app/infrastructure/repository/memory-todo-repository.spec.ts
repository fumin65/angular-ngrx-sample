import { MemoryTodoRepository } from './memory-todo-repository';

describe('MemoryTodoRepository', () => {
  it('should create an instance', () => {
    expect(new MemoryTodoRepository()).toBeTruthy();
  });
});
