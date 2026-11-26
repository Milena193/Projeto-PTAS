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
try {
    const id = Number(req.params.id);

    const indice = categorias.findIndex(categorias => categorias.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    categorias.splice(indice, 1);

    res.json({
        mensagem: 'Categoria excluída.'
    });
    }
    catch(error){
        return{error:error.message}
    }  
};
