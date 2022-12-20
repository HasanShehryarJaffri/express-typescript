import * as express from 'express';

import { HealthCheckController } from '../../controllers/HealthCheckController';

const router = express.Router();

router.get('/', HealthCheckController.getHealthStatus);

export default router;
