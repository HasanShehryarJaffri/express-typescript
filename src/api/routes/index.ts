import { Application } from 'express';

import healthCheckRoutes from "./health-check/health-check-routes";
import configRoutes from './config/config-routes';

export class Routes {
  public routes(app: Application): void {
    app.use('/health', healthCheckRoutes);
    app.use('/config', configRoutes);
  }
}
