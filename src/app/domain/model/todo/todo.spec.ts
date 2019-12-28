import {Todo} from './todo';
import {TodoId} from './todo-id';
import {IllegalArgumentError} from '../../error/illegal-argument-error';

describe('Todo', () => {
  describe('constructor', () => {
    it('should thrown illegal argument error with null name', () => {
      expect(() => new Todo(new TodoId('test'), null, new Date()))
        .toThrowMatching(thrown => thrown instanceof IllegalArgumentError);
    });
    it('should thrown illegal argument error with empty name', () => {
      expect(() => new Todo(new TodoId('test'), '', new Date()))
        .toThrowMatching(thrown => thrown instanceof IllegalArgumentError);
    });
  });
  describe('setName', () => {
    let todo: Todo;
    beforeEach(() => {
      todo = new Todo(new TodoId('test'), 'name', new Date());
    });

    it('should thrown illegal argument error with null name', () => {
      expect(() => todo.name = null)
        .toThrowMatching(thrown => thrown instanceof IllegalArgumentError);
    });
    it('should thrown illegal argument error with empty name', () => {
      expect(() => todo.name = '')
        .toThrowMatching(thrown => thrown instanceof IllegalArgumentError);
    });
  });
});
