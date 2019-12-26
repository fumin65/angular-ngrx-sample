import {TodoId} from './todo-id';
import {IllegalArgumentError} from '../../error/illegal-argument-error';

export class Todo {
  readonly id: TodoId;
  readonly createdAt: Date;

  private nameField: string;

  constructor(id: TodoId, name: string, createdAt: Date) {
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
  }

  get name(): string {
    return this.nameField;
  }

  set name(value: string) {
    if (value == null || value.length === 0) {
      throw new IllegalArgumentError('name must not be null/empty.');
    }
    this.nameField = value;
  }
}
