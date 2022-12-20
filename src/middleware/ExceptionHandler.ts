import { Request, Response, NextFunction } from "express";

export class ExceptionHandler {     
  handleException = (error: Error, req: Request, res: Response, next: NextFunction) => {      
    res.send({
      error: error.message,
    });
  }
}