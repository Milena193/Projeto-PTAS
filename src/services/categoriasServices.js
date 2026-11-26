import * as model from '../models/categorias.model.js'

export async function criar({ nome, descricao }) {
   try {
      if (!nome || !descricao) {
         throw new Error("Nome e descrição são obrigatórios.")
      }
   } catch (error) {
      return { error: error.message }
   }

   const novaCategoria = {
      nome,
      descricao
   };

   try {
      const idInserido = await model.inserir(novaCategoria);

      const categoriaCadastrada = {
         _id: idInserido,
         ...novaCategoria
      }

      return categoriaCadastrada
   } catch (error) {
      return { error: error.message }
   }

}


export function editar() {
   categorias.push(novaCategoria);
       throw new Error (novaCategoria);
   }

export function deletar() {
  const id = Number(req.params.id);

  const indice = categorias.findIndex(categorias => categorias.id === id);
  try{
    if (indice === -1) {
        throw new Error ("Categoria não encontrada")
        categorias.splice(indice, 1);     
    }
     throw new Error('Categoria excluída.') 
   }
   catch(error){
      return { error: error.message }
   }
}