import * as service from '../services/comentarios.service.js'

export function listar(req, res) {
    res.json(service.listar());
}

export function criar(req, res) {
    const comentario = service.criar(req.body);
    res.status(201).json(comentario);
}