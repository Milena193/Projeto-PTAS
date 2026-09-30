const express = require('express');
const usuarios = require('../models/usuarios');
const posts= require('../models/posts');
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

router.put('/usuarios/:id ' , (req,res) =>{
    const id = Number(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id===id);
    if(!usuario){
        return res.status(404).json({
            mensagem:'Usuario não encontrado'
        });
    }

    const{nome,email,senha,perfil}=req.body;
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

    usuarios.slice(indice, 1);
    res.json({
        mensagem:'Usuario excluido'
    });
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

    const novoPost={
        id:this.posts.length+1, 
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

module.exports=router;

