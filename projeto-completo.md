API — Blog ou Portal de Notícias

1. Descrição

API REST desenvolvida em JavaScript com Node.js e Express para gerenciar um blog ou portal de notícias. O sistema permite cadastrar usuários, criar e editar publicações, organizar categorias e administrar comentários.

2. Tecnologias utilizadas

- JavaScript
- Node.js
- Express.js
- Git e GitHub

3. Instalação e execução

Pré-requisitos: Node.js e npm instalados.

1. Clone o repositório:
   "git clone https://github.com/Milena193/Projeto-PTAS.git"

2. Entre na pasta do projeto:
   "cd Projeto-PTAS"

3. Instale as dependências:
   "npm install"

4. Inicie o servidor:
   "node src/app.js"

Observação: ajuste o último comando caso o arquivo que inicia o servidor tenha outro caminho ou nome. O comando precisa corresponder à estrutura real do projeto.

Se o servidor iniciar corretamente, acesse "http://localhost:3000".

4. Entidades

- Usuários: nome, e-mail, senha e perfil.
- Posts: título, conteúdo, data, status, autor e categoria.
- Categorias: organização das publicações por assunto.
- Comentários: mensagens associadas às publicações.

5. Endpoints

Usuários

- "GET /usuarios" — listar usuários.
- "GET /usuarios/:id" — buscar usuário por ID.
- "POST /usuarios" — cadastrar usuário.
- "PUT /usuarios/:id" — atualizar usuário.
- "DELETE /usuarios/:id" — excluir usuário.

Posts

- "GET /posts" — listar publicações disponíveis ao público.
- "GET /posts/:id" — buscar publicação por ID.
- "POST /posts" — criar publicação.
- "PUT /posts/:id" — atualizar publicação.
- "DELETE /posts/:id" — excluir publicação.

Categorias

- "GET /categorias" — listar categorias.
- "POST /categorias" — cadastrar categoria.
- "PUT /categorias/:id" — atualizar categoria.
- "DELETE /categorias/:id" — excluir categoria.

Comentários

- "GET /comentarios" — listar comentários.
- "POST /comentarios" — cadastrar comentário.
- "DELETE /comentarios/:id" — remover comentário, conforme a regra de moderação.

Busca

- "GET /buscar?texto=palavra" — pesquisar publicações por texto, caso essa rota esteja implementada.

6. Regras de negócio

1. Somente usuários com perfil "autor" podem publicar ou editar posts.
2. Posts com status "rascunho" não devem aparecer na listagem pública.
3. Somente usuários com perfil "moderador" podem remover comentários.

7. Testes

Os endpoints devem ser testados com uma ferramenta de requisições HTTP, como Postman ou Insomnia. Verifique as respostas, os códigos HTTP e as regras de negócio.

8. Estrutura do projeto

- "src/models": modelos e listas de dados das entidades.
- "src/routes": definição das rotas da API.
- Arquivo principal: inicialização do servidor.
