
import express from 'express'
import usuariosRoutes from './routes/usuariosRoutes.js';
import postsRoutes from './routes/postsRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js'; 
import comentariosRoutes from './routes/comentariosRoutes.js';

const app = express();

app.use(express.json());

app.use('/usuarios', usuariosRoutes);
app.use('/posts', postsRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/comentarios', comentariosRoutes);

app.get('/',(res) => {
    res.json({
        mensagem: 'API do blog funcionando'
    });

});

export default app;