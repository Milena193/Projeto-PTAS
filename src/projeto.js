
import express from 'express'
export default router;
const app = express();

app.use(express.json());
import usuariosRoutes from './routes/usuariosRoutes.js';
import postsRoutes from './routes/postsRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js'; 
import comentariosRoutes from './routes/comentariosRoutes.js';

app.use('/usuarios', usuariosRoutes);
app.use('/posts', postsRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/comentarios', comentariosRoutes);

app.get('/',(res) => {
    res.json({
        mensagem: 'API do blog funcionando'
    });

});

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
});

