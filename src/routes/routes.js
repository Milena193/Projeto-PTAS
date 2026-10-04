const express = require('express');
const usuarios = require('../models/usuarios');
const posts= require('../models/posts');
const categorias = require('../models/categorias');
const comentarios = require('../models/comentarios');
const posts = require('../models/posts');
const router= express.Router();

router.get('/usuarios', (req, res) => {
    res.json(usuarios);

});
router.get('/usuarios/:id', (req, res)=>{
    const id = Number(req.params.id);
    const usuario = usuarios.find(usuario=>usuario.id === id);
    if(!usuario){
        return res.status(404).json({
            mensagem:'Usuário não encontrado'
        });
    }
    res.json(usuario);
});

router.post('/usuarios', (req, res)=> {
    const {nome, email, senha, perfil}= req.body;
    if(!nome || !email || !senha || !perfil){
        return res.status(400).json({
            mensagem:'Os campos são obrigatórios'
        });
    }
    if (!['leitor', 'autor', 'moderador'].includes(perfil)) {
        return res.status(400).json({
            mensagem: 'Perfil inválido'
        });
    }


    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
        senha,
        perfil
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario)
});

router.put('/usuarios/:id' , (req,res) =>{
    const id = Number(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id===id);
    if(!usuario){
        return res.status(404).json({
            mensagem:'Usuario não encontrado'
        });
    }

    const{nome,email,senha,perfil}=req.body;
    if(!nome || !email || !senha || !perfil){
        return res.status(400).json({
            mensagem: 'Os campos são obrigatórios'
        });
    }
     if (!['leitor', 'autor', 'moderador'].includes(perfil)) {
        return res.status(400).json({
            mensagem: 'Perfil inválido'
        });
    }


    usuario.nome=nome;
    usuario.email=email;
    usuario.senha=senha;
    usuario.perfil=perfil;
    res.json(usuario);
});

router.delete('/usuarios/:id', (req,res)=>{
    const id=Number(req.params.id);
    const indice=usuarios.findIndex(usuario =>usuario.id===id);
    if(indice===-1){
        return res.status(404).json({
            mensagem:'Usuario não encontrado'
        });
    }

    usuarios.splice(indice, 1);
    res.json({
        mensagem:'Usuario excluido'
    });
});
router.get('/posts', (req, res) => {
    res.json(posts);

});
router.get('/posts', (req, res) => {
    const postsPublicados = posts.filter(
        post => post.status === 'publicado'
    );

    res.json(postsPublicados);
});

router.get('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(
        post => post.id === id
    );
    if(!posts){
        return res.status(404).json({
            mensagem: 'Post não encontrado.'
        });
    }
    res.json(posts);
});


router.post('/posts' , (req,res)=>{
    const{
        titulo,
        conteudo,
        dataCriacao,
        status,
        autorId,
        categoriaId
    }=req.body;
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

    const novoPost={
        id:posts.length + 1, 
        titulo,
        conteudo,
        dataCriacao,
        status,
        autorId,
        categoriaId
    };

    posts.push(novoPost);
    res.status(201).json(novoPost);
});
router.put('/posts/:id', (req,res)=> {
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
});
router.delete('/posts/:id', (req, res) => {
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
    });
    
    router.get('/categorias', (req, res) => {
    res.json(categorias);
});
router.get('/categorias/:id', (req, res) => {
    const id = Number(req.params.id);
    const categoria = categorias.find(
        categoria => categoria.id === id
    );
    if(!categorias){
        return res.status(404).json({
            mensagem: 'Categoria não encontrada.'
        });
    }
    res.json(categorias);
});

router.post('/categorias', (req, res)=> {
     const {nome, descricao}= req.body;
     if(!nome || !descricao){
        return res.status(400).json({
            mensagem:'Nome e descrição são obrigatórios.'
        });
     }
     const novaCategoria={
        id:categorias.length + 1, 
       nome, 
       descricao
    };

    categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);
});

router.delete('/categorias/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = categorias.findIndex(categorias => categorias.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    posts.splice(indice, 1);

    res.json({
        mensagem: 'Categoria excluída.'
    });
    });

router.get('/comentarios', (req, res) => {
    res.json(comentarios);
});

router.get('/comentarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const comentario = comentarios.find(
        comentario => comentario.id === id
    );
    if(!comentario){
        return res.status(404).json({
            mensagem: 'Comentário não encontrado.'
        });
    }
    res.json(comentario);
});

router.post('/comentarios' , (req,res)=>{
    const{
        texto,
        data,
        usuarioId,
        postId
    }=req.body;
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
});

router.delete('/comentarios/:id', (req, res) => {
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
     if (!moderador || moderador.perfil !== 'moderador') {
        return res.status(403).json({
            mensagem: 'Somente moderadores podem excluir comentários'
        });
    }


    posts.splice(indice, 1);

    res.json({
        mensagem: 'Comentário excluído'
    });
    });

    router.get('/buscar', (req, res)=>{
        const{texto, categoria} = req.query;
        const resultado = posts.filter(post => post.status === 'publicado');
        if(texto){
            resultado = resultado.filter(post =>
                post.titulo.toLowerCase().includes(texto.toLocaleLowerCase()) ||
                post.conteudo.toLowerCase().includes(texto.toLocaleLowerCase())
            );
        }
        if(categoria){
            resultado = resultado.filter(post => {
                const categoriaPost = categorias.find(
                    cat = cat.id === post.categoriaId
                );
                return categoriaPost && categoriaPost.nome.toLocaleLowerCase() === categoria.toLocaleLowerCase();
            });
        }
        res.json(resultado);
    });


module.exports=router;

