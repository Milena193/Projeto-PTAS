import usuarios from '../models/usuarios.js'

export function listar() {
    return usuarios;
}

export function criar({nome, email, senha, perfil}) {
    if(!nome || !email || !senha || !perfil){
        return res.status(400).json({
            mensagem:'Os campos são obrigatórios'
        });
    }
    if (!['leitor', 'autor', 'moderador'].includes(perfil)) {
        return res.status(400).json({
            mensagem: 'Perfil inválido'
        });
    }


    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
        senha,
        perfil
    };
    usuarios.push(novoUsuario);
}

export function editar() {

}

export function deletar() {

}