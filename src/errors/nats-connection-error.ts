import { CustomError } from './custom-error';

export class NatsConnectionError extends CustomError {
    statusCode = 503;
    reason = 'Error connecting to Nats Streaming Server';

    constructor() {
        // super expects an error message for logging purpose
        super('Error connecting to Nats Streaming Server');

        // only because we're extending a built in class
        Object.setPrototypeOf(this, NatsConnectionError.prototype);
    }

    serialiseErrors() {
        return [{ message: this.reason }];
    }
}
