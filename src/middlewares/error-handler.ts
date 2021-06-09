import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../errors/custom-error';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        res.status(err.statusCode).send({ errors: err.serialiseErrors() });
    }

    //! This is not a CustomError: let's log it out and inspect it...
    console.error('Error not handled in CustomError: ', err);

    res.status(400).send({
        errors: [{ message: err.message }],
    });
};
