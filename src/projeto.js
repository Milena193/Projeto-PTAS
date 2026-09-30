
const express = require ('express')
const app = express();

app.use(express.json());
const routes = require('./routes/routes');

app.use(routes);

app.get('/',(req,res) => {
    res.json({
        mensagem: 'API do blog funcionando'
    });

});

app.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000');
});

