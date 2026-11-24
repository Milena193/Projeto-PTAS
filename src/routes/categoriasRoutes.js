import {Router } from 'express'
import * as controller from '../controllers/categoriasController.js'

const router = Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
// router.put();
// router.patch();
// router.delete();

export default router;