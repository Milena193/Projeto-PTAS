import comentarios from "../models/comentarios.js";
import usuarios from "../models/usuarios.js";
import posts from "../models/posts.js";

export function listar(){
    return comentarios;
};

export default function criar({
        texto,
        data,
        usuarioId,
        postId
    }){

    if(!texto || !data || !usuarioId || !postId ){
        throw new Error("Os campos são obrigatórios.")
        };
    
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

    comentarios.push(novoComentario);
    return novoComentario;
    }