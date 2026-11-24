import * as service from '../services/comentariosServices.js'

export function listar(req, res) {
    res.json(service.listar());
}

export function criar(req, res) {
    const comentario = service.criar(req.body);
    res.status(201).json(comentario);
}