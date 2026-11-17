import express from 'express'
import * as controller from '../controlles/categorias.controller.js'

const router = Router()

router.get('/', controller.listar());
router.post('/', controller.criar());
router.put();
router.patch();
router.delete();