import * as service from '../services/usuariosService.js'

export async function listar(req, res) {
    res.json(service.listar());
}
export async function criar(req, res) {
    try{
    const usuario = service.criar(req.body);
    res.status(201).json(usuario);
    }
    catch (error) {
      return { error: error.message }
   }

}