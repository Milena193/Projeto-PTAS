export function criar({nome, descricao} ,req, res){
     if(!nome || !descricao){
         res.status(400).json({
            mensagem:'Nome e descrição são obrigatórios.'
        });

     }
     const novaCategoria={
       id: categorias.length + 1, 
       nome, 
       descricao
    };
     categorias.push(novaCategoria);
     res.status(201).json(novaCategoria);
}
   

    export function editar(){

    }

    export function deletar(){
        
    }