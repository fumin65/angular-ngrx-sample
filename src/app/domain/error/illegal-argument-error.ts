export class IllegalArgumentError implements Error {
  readonly message: string;
  readonly name = 'IllegalArgumentError';

  constructor(message: string) {
    this.message = message;
  }

}
