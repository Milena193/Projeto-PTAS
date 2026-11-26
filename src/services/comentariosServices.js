import * as model from '../models/comentarios.model.js'


export async function listar(){
    return comentarios;
};

export async function criar({
        texto,
        data,
        usuarioId,
        postId
    }){
        try{
            if(!texto || !data || !usuarioId || !postId ){
        throw new Error("Os campos são obrigatórios.")
        };
        }
       catch (error) {
      return { error: error.message }
   }
    const usuario = usuarios.find(
        usuario => usuario.id === Number(usuarioId)
    );
   if (!usuario) {
         throw new Error("Usuario não encontrado.")
        };

    const post = posts.find(
        post => post.id === Number(postId)
    );{
    if (!post) {
        res.status(404).json({
            mensagem: 'Post não encontrado.'
        });
    }}
    const novoComentario={
        id:comentarios.length + 1, 
       texto,
       data,
       usuarioId: Number (usuarioId),
       postId: Number (postId)
    };
    try {
          const idInserido = await model.inserir(novoComentario);
    
          const comentarioCadastrado = {
             _id: idInserido,
             ...novoComentario
          }
    
          return comentarioCadastrado
       } catch (error) {
          return { error: error.message }
       }
    
    }
    export async function editar() {
       comentarios.push(novoComentario);
    return novoComentario;
 
    };
    export async function deletar() {
        const id = Number(req.params.id);
        const moderadorId = Number(req.body.moderadorId);
        const moderador = usuarios.find(
                usuario => usuario.id === moderadorId);
        
        const indice = comentarios.findIndex(comentarios => comentarios.id === id);
        try{
            if (indice === -1) {
                throw new Error('Comentário não encontrado.') 
            
            }
        
             if (!moderador || moderador.perfil !== 'moderador') {
                
                throw new Error( 'Somente moderadores podem excluir comentários'
                )   
            }
            posts.splice(indice, 1);
            throw new Error('Comentário excluído')   
        }
        catch(error){
             return { error: error.message }
        }
      };
    
