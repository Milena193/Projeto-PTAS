import * as service from '../services/categoriasServices.js'

export function listar(req, res) {
    res.json(service.listar());
}

export function criar(req, res) {
    const categoria = service.criar(req.body);
    res.status(201).json(categoria);
}