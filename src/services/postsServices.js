 export function criar({
        titulo,
        conteudo,
        dataCriacao,
        status,
        autorId,
        categoriaId
    }, req, res){
    if(!titulo || !conteudo || !dataCriacao || !status || !autorId || !categoriaId){
        return res.status(400). json({
            mensagem: 'Os campos são obrigatórios.'
        });
    }
    if (!['rascunho', 'publicado'].includes('status')) {
        res.status(400).json({
            mensagem: 'Status inválido'
        });
    }
    

    const autor= usuarios.find(usuario=> usuario.id=== autorId);
    const categoria = categorias.find(categoria => categoria.id === categoriaId);
    if (!autor) {
        res.status(404).json({
            mensagem: 'Autor não encontrado'
        });
    }

    if (autor.perfil !== 'autor') {
        res.status(403).json({
            mensagem: 'Apenas autores podem criar posts'
        });
    }
    if (!categoria) {
        res.status(404).json({
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
}

   export function editar(){

   }
   export function deletar(){
    
   }