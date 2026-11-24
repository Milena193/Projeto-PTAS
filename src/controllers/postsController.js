import * as service from '../services/postsServices.js'

export function listar(req, res) {
    res.json(service.listar());
}

export function criar(req, res) {
    const post = service.criar(req.body);
    res.status(201).json(post);
}