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

export async function editar(req,res) {
    try{
        comentarios.push(novoComentario);
        res.status(201).json(novoComentario);
    }
    catch(error){
        return{error:error.message}
    }
};

export async function deletar(req,res){
    try{
            const id = Number(req.params.id);
            const moderadorId = Number(req.body.moderadorId);
            const moderador = usuarios.find(
                usuario => usuario.id === moderadorId);
        
            const indice = comentarios.findIndex(comentarios => comentarios.id === id);
        
            if (indice === -1) {
                return res.status(404).json({
                    mensagem: 'Comentário não encontrado.'
                });
            }
            comentarios.splice(indice,1);
            res.json({mensagem:'Comentário excluído'})
        
             if (!moderador || moderador.perfil !== 'moderador') {
                return res.status(403).json({
                    mensagem: 'Somente moderadores podem excluir comentários'
                });
            }
        
            posts.splice(indice, 1);
        
            res.json({
                mensagem: 'Comentário excluído'
            });
            }
            catch(error){
                return{error:error.message}
            }
    };
