import * as express from 'express';

import { ConfigController } from '../../controllers/ConfigController';

const router = express.Router();

router.get('/', ConfigController.getAppConfig);

export default router;
