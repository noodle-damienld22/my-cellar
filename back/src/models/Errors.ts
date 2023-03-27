export class CustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class NotFoundError extends CustomError {
  constructor(id: string) {
    super(`Item ${id} was not found`, 404);
  }
}
