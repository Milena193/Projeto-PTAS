 export function criar({
        titulo,
        conteudo,
        dataCriacao,
        status,
        autorId,
        categoriaId
    }){
    if(!titulo || !conteudo || !dataCriacao || !status || !autorId || !categoriaId){
        return res.status(400). json({
            mensagem: 'Os campos são obrigatórios.'
        });
    }}
    if (!['rascunho', 'publicado'].includes(status)) {
        return res.status(400).json({
            mensagem: 'Status inválido'
        });
    }
    

    const autor= usuarios.find(usuario=> usuario.id=== autorId);
    const categoria = categorias.find(categoria => categoria.id === categoriaId);
    if (!autor) {
        return res.status(404).json({
            mensagem: 'Autor não encontrado'
        });
    }

    if (autor.perfil !== 'autor') {
        return res.status(403).json({
            mensagem: 'Apenas autores podem criar posts'
        });
    }
    if (!categoria) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada.'
        });
    }

    const novoPost={
        id:posts.length + 1, 
        titulo,
        conteudo,
        dataCriacao,
        status,
        autorId,
        categoriaId
    };

   export function editar(){

   }
   export function deletar(){
    
   }