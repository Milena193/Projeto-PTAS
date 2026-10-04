# Projeto-PTAS
API: Blog ou Portal de Notícias.

A API foi construída para um blog ou portal de notícias.
O sistema cadastra usuários, cria e gerencia posts, cadastra categorias e realiza comentários.
Utilizamos o JavaScript, Node.js, Express.js, HTTP/REST e o JSON para a realização do projeto. 

Usuários:
GET/usuarios //lista todos os usuários.
GET/usuarios/:id //Busca um usuário pelo id.
POST/usuarios //Cadastra um novo usuário.
PUT/usuarios/:id //Atualiza um usuário.
DELETE/usuarios/:id //Exclui um usuário.

Posts:
GET/posts // Lista os posts publicados.
GET/posts/:id //Busca um post pelo ID.
POST/posts //Cria um novo post.
PUT/posts/:id //Atualiza um post.
DELETE/posts/:id //Exclui um post.

Categorias:
GET/categorias //Lista as categorias.
GET/categorias/:id //Busca uma categoria pelo ID.
POST/categorias //Cadastra uma nova categoria.
DELETE/categorias/:id //Exclui uma categoria.

Comentários:
GET/comentarios //Lista os comentários.
GET/comentarios/:id //Busca um comentário pelo ID.
POST/comentarios//Cadastra um novo comentário.
DELETE/comentario/:id //Exclui um comentário.

Busca:
GET/buscar?texto=palavra //Busca posts pelo título ou conteúdo.
GET/buscar?categoria=nome //Busca posts por categoria.

Regras:
1. Apenas usuários com perfil de autor podem publicar posts.

2. Posts com status "rascunho" não aparecem na listagem pública de posts.

3. Somente usuários com perfil de moderador podem remover comentários.

Entidades: 
Usuários
Posts
Categorias
Comentários
Leitor(Visualiza posts e realiza comentários.)
Autor(Cria e publica posts.)
Moderador(Modera comentários.)

Estrutura do projeto:
src/
projeto.js

models/
usuarios.js
posts.js
categorias.js
comentarios.js

routes/
routes.js
