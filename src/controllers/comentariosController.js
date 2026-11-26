import * as service from '../services/comentariosServices.js'

export async function listar(req, res) {
    res.json(service.listar());
}

export async function criar(req, res) {
    try{
        const comentario= service.default(req.body);
        res.status(201).json(comentario);
    }
   catch(erro){
    res.status(400).json({
        mensagem:erro.message
    });
   }
};