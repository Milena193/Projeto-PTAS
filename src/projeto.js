
const express = require ('express')
const app = express();

app.use(express.json());
const {usuarios} = require('./routes/usuarios');
const { posts } = require('./models/posts');
const { categorias } = require('./models/categorias');
const { comentarios } = require('./models/comentarios');

app.use('/usuarios', categoriasRoutes);
app.use('/posts', postsRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/comentarios', comentariosRoutes);

app.get('/',(req,res) => {
    res.json({
        mensagem: 'API do blog funcionando'
    });

});

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
});

