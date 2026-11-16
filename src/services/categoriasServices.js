export function criar({nome, descricao}){
     if(!nome || !descricao){
        return res.status(400).json({
            mensagem:'Nome e descrição são obrigatórios.'
        });
     }}
     const novaCategoria={
        id:categorias.length + 1, 
       nome, 
       descricao
    };

    categorias.push(novaCategoria);
    res.status(201).json(novaCategoria);

    export function editar(){

    }

    export function deletar(){
        
    }