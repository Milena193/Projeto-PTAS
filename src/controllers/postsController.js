import * as service from '../services/postsServices.js'

export async function listar(req, res) {
    res.json(service.listar());
}

export async function criar(req, res) {
    try{
    const post = service.criar(req.body);
    res.status(201).json(post);
    }
   catch (error) {
      return { error: error.message }
   }

}

export async function editar(req,res) {
    try{
        const id= Number(req.params.id);
        const post= posts.find(post=> post.id===id);
        if (!post) {
            return res.status(404).json({
                mensagem: 'Post não encontrado'
            });
        }
    
        const {
            titulo,
            conteudo,
            dataCriacao,
            status,
            autorId,
            categoriaId
        } = req.body;
         if(!titulo || !conteudo || !dataCriacao || !status || !autorId || !categoriaId){
            return res.status(400). json({
                mensagem: 'Os campos são obrigatórios.'
            });
        }
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
    
        post.titulo = titulo;
        post.conteudo = conteudo;
        post.dataCriacao = dataCriacao;
        post.status = status;
        post.autorId = autorId;
        post.categoriaId = categoriaId;
    
         
        res.json(post);
    }
    catch(error){
        return{error:error.message}
    }  
};

export async function deletar(req,res) {
  try{
        const id = Number(req.params.id);
    
        const indice = posts.findIndex(post => post.id === id);
    
        if (indice === -1) {
            return res.status(404).json({
                mensagem: 'Post não encontrado'
            });
        }
    
        posts.splice(indice, 1);
    
        res.json({
            mensagem: 'Post excluído'
        });
        }
        catch(error){
            return{error:error.message}
        }
    
};