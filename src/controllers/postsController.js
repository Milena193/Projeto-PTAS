import * as service from '../services/postsServices.js'

export async function listar(req, res) {
    res.json(service.listar());
}

export async function criar(req, res) {
    try{
    const post = service.criar(req.body);
    res.status(201).json(post);
    }
   catch (error) {
      return { error: error.message }
   }

}