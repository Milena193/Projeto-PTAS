import * as service from '../services/usuariosService.js'

export async function listar(req, res) {
    res.json(service.listar());
}

export async function criar(req, res) {
    try{
    const usuario = service.criar(req.body);
    res.status(201).json(usuario);
    }
    catch (error) {
      return { error: error.message }
   }

}
export async function editar(req, res) {
        try{
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
        }
        catch(error){
            return {error: error.message}
        }
        usuario.nome=nome;
        usuario.email=email;
        usuario.senha=senha;
        usuario.perfil=perfil;
        res.json(usuario);
    }

    export async function deletar(req,res){
        try{const id=Number(req.params.id);
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
    }
    catch(error){
        return {error:error.message}
    }
};
        