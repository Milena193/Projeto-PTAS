import comentarios from "../models/comentarios.js";
import usuarios from "../models/usuarios.js";



export default function criar({
        texto,
        data,
        usuarioId,
        postId
    }, req, res){

    if(!texto || !data || !usuarioId || !postId ){
        throw new Error("Os campos são obrigatórios.")
        };
    }
    const usuario = usuarios.find(
        usuario => usuario.id === Number(usuarioId)
    );{
   if (!usuario) {
        res.status(404).json({
            mensagem: 'Usuário não encontrado.'
        });
    }}
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
    res.status(201).json(novoComentario);
