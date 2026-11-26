import {Router } from 'express'
import * as controller from '../controllers/comentariosController.js'

const router = Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
router.put('/', controller.editar);
router.delete('/', controller.deletar);

export default router;