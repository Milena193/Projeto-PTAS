import * as service from '../services/categoriasServices.js'

export async function listar(req, res) {
    res.json(service.listar());
}

export async function criar(req, res) {
    try{
        const categoria = await service.criar(req.body);
    res.status(201).json(categoria);
    }
    catch (error) {
      return { error: error.message }
   }
}
export async function editar(req, res) {
    try{
        categorias.push(novaCategoria);
        res.status(201).json(novaCategoria);
    }
    catch(error){
        return{error: error.message}
    }
}
export async function deletar(req, res) {


    
}
