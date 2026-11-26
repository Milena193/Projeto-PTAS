import * as model from '../models/usuarios.model.js'

export async function listar() {
    return usuarios;
}

export async function criar({ nome, email, senha, perfil }) {
    try {
        if (!nome || !email || !senha || !perfil) {
            throw new Error('Os campos são obrigatórios')
        }
        if (!['leitor', 'autor', 'moderador'].includes(perfil)) {
            throw new Error('Perfil inválido')

        }
    }
    catch (error) {
        return { error: error.message }
    }

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha,
        perfil: perfil
    };
    try {
          const idInserido = await model.inserir(novoUsuario);
    
          const usuarioCadastrado = {
             _id: idInserido,
             ...novoUsuario
          }
    
          return usuarioCadastrado
       } 
       catch (error) {
          return { error: error.message }
       }

}

export function editar() {
    const id = Number(req.params.id);
    const usuario = usuarios.find(usuario => usuario.id===id);
    try{

        if(!usuario){
            throw new Error('Usuario não encontrado')
        }
    }
    catch(error){
        return{error: error.message}
    }
    
        const{nome,email,senha,perfil}=req.body;
        try{
            if(!nome || !email || !senha || !perfil){
            throw new Error('Os campos são obrigatórios')
        }
         if (!['leitor', 'autor', 'moderador'].includes(perfil)) {
            throw new Error('Perfil inválido')
            };
        }
        catch(error){
            return{error: error.message}
        }
        usuario.nome=nome;
        usuario.email=email;
        usuario.senha=senha;
        usuario.perfil=perfil;
        res.json(usuario);
    }
export function deletar() {
    const id=Number(req.params.id);
    const indice=usuarios.findIndex(usuario =>usuario.id===id);
    try{
        if(indice===-1){
            throw new Error('Usuario não encontrado')
        }
        usuarios.splice(indice, 1);
        throw new Error('Usuario excluido')
    }
    catch(error){
        return{error: error.message}
    }
    }