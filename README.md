# Repositório do projeto Blogs API

 ## Módulo: BACK-END
 
  Repositório possui projeto desenvolvido no período que estive na <b>Trybe</b>, abordando os conceitos de <b>RESTFul API</b> com CRUD completo utilizando arquitetura Model-Service-Controller (MSC). 
  
## Informações de aprendizados
- Este é um projeto desenvolvido para me ajudar a aprender sobre sequelize e JWT.
- Meu primeiro projeto usando `sequelize` e `JWT`


  
---

### Linguagem usadas

![JavaScript][JavaScript.io]

[![NodeJS][NodeJS.io]][NodeJS-url]

[![Express][Express.io]][Express-url]

[![JWT][JWT.io]][JWT-url]

[![MySQL][MySQL.io]][MySQL-url]

[![Sequelize][Sequelize.io]][Sequelize-url]

[![Docker][Docker.io]][Docker-url]

---

## O que foi desenvolvido

Uma API e um banco de dados, utilizando a arquitetura MSC (model-service-controller), para a produção de conteúdo para um blog!
1 - Desenvolvi endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;
2 - Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre user e post;
3 - Será necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.

---

## Variáveis de Ambiente

Para rodar esse projeto, atente-se as variáveis de ambiente no seu .env

---

### Instruções para instalar e rodar

1. Clone o repo:
```
  git clone git@github.com:Ludson96/project-blogs-api.git
```
2. Já existe um arquivo docker-compose.yml (Disponibilizado pela Trybe). Bastando usar o comando docker-compose up para rodar o MySQL e o Node pelo docker. Execute os services do docker: `node` e `db` 
```
  docker-compose up -d
```
3. Inicie o container node (renomeado para blogs_api):
```
  docker exec -it blogs_api bash
```
4. Instale as suas dependencias:
```
  npm install
```
5. Execute o servidor:

```
  npm start
```
Outra forma de executar é utilizando o `nodemom` (permite fazer alteração em tempo real sem precisar derrubar o servidor e iniciá-lo novamente):
```
  npm run debug
```
6. Utilizar alguma Plataforma de API para acessar os endpoints e fazer seus devidos experimentos. Exemplos: Postman e Insomnia. Ou uma extensão no VSCode, recomendo utlizar a thunder client.

7. Uso

- utiline o comando `npm run prestart`, ele criará o banco de dados e as tabelas de acordo com o que está em `/migrations` e `/seeders` .

- Todas as rotas (exceto `post /login` e `post /user` ) requerem autenticação

---

## Diagrama

![Diagrama de relacionamentos das tabelas](diagrama.png)

<i> Imagem disponibilizada pela Trybe </i>

---

## Usage

Since this is a simple back-end project, there's no front-end.
Using `StoreManager` DB (`migration.sql` and `seed.sql`).

<details>


 </details>


> Primeiro projeto usando a `arquitetura MSC` e testes com `mocha`, `chai` e `sinon`

> `docker-compose.yml`, `config.js` e `/seeders` arquivos providos pela Trybe.

[JavaScript.io]: https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black
[Express.io]: https://img.shields.io/badge/express-000000?style=flat-square&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[Sequelize.io]: https://img.shields.io/badge/sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org
[JWT.io]: https://img.shields.io/badge/jwt-000000?style=flat-square&logo=jsonwebtokens&logoColor=white
[JWT-url]: https://jwt.io
[NodeJS.io]: https://img.shields.io/badge/node.js-339933?style=flat-square&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/en/
[MySQL.io]: https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com
[Docker.io]: https://img.shields.io/badge/docker-2496ED?style=flat-square&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com
