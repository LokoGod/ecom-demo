export class HttpError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode
    }
}

export class NotFound extends HttpError {
    constructor(message: string = 'Not Found') {
      super(message, 404);
    }
  }
  
  export class BadRequest extends HttpError {
    constructor(message: string = 'Bad Request') {
      super(message, 400);
    }
  }

  export class InternalServer extends HttpError {
    constructor(message: string = 'Internal Server Error') {
      super(message, 500);
    }
  }