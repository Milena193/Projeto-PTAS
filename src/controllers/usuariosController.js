import * as service from '../services/usuariosService.js'

export function listar(req, res) {
    res.json(service.listar());
}

export function criar(req, res) {
    const usuario = service.criar(req.body);
    res.status(201).json(usuario);
}