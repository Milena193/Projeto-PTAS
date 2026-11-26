import * as model from '../models/posts.model.js'

export async function criar({
        titulo,
        conteudo,
        dataCriacao,
        status,
        autorId,
        categoriaId
    }){
    try{
        if(!titulo || !conteudo || !dataCriacao || !status || !autorId || !categoriaId){
            throw new Error('Os campos são obrigatórios.') 
    }
     if (!['rascunho', 'publicado'].includes('status')) {
       
           throw new Error('Status inválido') 
    }
    }
    catch (error) {
      return { error: error.message }
   }
    const autor= usuarios.find(usuario=> usuario.id=== autorId);
    const categoria = categorias.find(categoria => categoria.id === categoriaId);
    try{
        if (!autor) {
        throw new Error( 'Autor não encontrado')
        }
    
        if (autor.perfil !== 'autor') {
            throw new Error('Apenas autores podem criar posts')
    }
        if (!categoria) {
        throw new Error('Categoria não encontrada.')
    }
}
    
    catch (error) {
          return { error: error.message }
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
    
        const id = Number(req.params.id);
        const usuario = usuarios.find(usuario => usuario.id===id);
        try{
            if(!usuario){
            throw new Error('Usuario não encontrado')
        }
        }
        catch (error) {
          return { error: error.message }
       }
        
        const{nome,email,senha,perfil}=req.body;
        try{
            if(!nome || !email || !senha || !perfil){
           throw new Error ('Os campos são obrigatórios')
        }
           if (!['leitor', 'autor', 'moderador'].includes(perfil)) {
               throw new Error('Perfil inválido')
            }
        }
        
        catch (error) {
          return { error: error.message }
       }
    
        
    
    
        usuario.nome=nome;
        usuario.email=email;
        usuario.senha=senha;
        usuario.perfil=perfil;
        throw new Error(usuario)
    };
    

   
   export function deletar(){
    
        const indice = posts.findIndex(post => post.id === id);
        try{
            if (indice === -1) {
         throw new Error('Post não encontrado') 
            }
        posts.splice(indice, 1);
            throw new Error('Post excluído') 
        }
        catch(error){
             return { error: error.message }
        }
        }