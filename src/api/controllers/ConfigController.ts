import { Request, Response, NextFunction } from 'express';

import ConfigService from '../services/ConfigService';
import FileService from '../services/FileService';

export class ConfigController {
  public static async getAppConfig(req: Request, res: Response, next: NextFunction) {
    try {
      let config = {};

      const appConfig = await ConfigService.fetchAppConfig();
      
      if (appConfig) {
        config = appConfig;
      } else {
        config = FileService.readLocalConfigFile()?.default;
      }

      res.send(config)?.status(200);
    } catch (err) {
      next(err);
    }
  }
}