import express from 'express';
import * as controller from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
router.put('/', controller.editar);
router.delete('/', controller.deletar);

export default router;