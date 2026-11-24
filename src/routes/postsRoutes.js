import {Router } from 'express'
import * as controller from '../controllers/postsController.js'

const router = Router()

router.get('/', controller.listar);
router.post('/', controller.criar);
// router.put();
// router.patch();
// router.delete();

export default router;