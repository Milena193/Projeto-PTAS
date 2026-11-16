import { criar } from "./usuariosService";

export default criar({
        texto,
        data,
        usuarioId,
        postId
    })

    if(!texto || !data || !usuarioId || !postId ){
        return res.status(400). json({
            mensagem: 'Os campos são obrigatórios.'
        });
    }
    const usuario = usuarios.find(
        usuario => usuario.id === Number(usuarioId)
    );
   if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado.'
        });
    }
    const post = posts.find(
        post => post.id === Number(postId)
    );
    if (!post) {
        return res.status(404).json({
            mensagem: 'Post não encontrado.'
        });
    }
    const novoComentario={
        id:comentarios.length + 1, 
       texto,
       data,
       usuarioId: Number (usuarioId),
       postId: Number (postId)
    };

    comentarios.push(novoComentario);
    res.status(201).json(novoComentario);
