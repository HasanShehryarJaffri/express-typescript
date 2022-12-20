import { Request, Response } from 'express';


export class HealthCheckController {
  public static getHealthStatus(req: Request, res: Response) {
    res.send("Health OK!")?.status(200);
  }
}