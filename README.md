## LabenuSystem:

![Labenu System](https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eb17dfd4a07be86d2b8951e_Labenu_principal_slogan.png)

Este é um projeto para contrução de uma API REST para gerenciamento de participantes da Labenu.

Este app gerencia todo o cadastro, alterações e visualizaço dos alunos, turmas, professores, habilidades, hobbies e muito!

## Autor

- Marcelino Sandroni

## Estrutura dos endpoints

# API catalog

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14852823-ed39eab9-1a94-4ec5-a081-88a4ac1f64aa?action=collection%2Ffork&collection-url=entityId%3D14852823-ed39eab9-1a94-4ec5-a081-88a4ac1f64aa%26entityType%3Dcollection%26workspaceId%3D1abd2c64-b3c1-4171-933f-f7f24af287a0)

Documentação do postman em andamento, veja no link abaixo.

[Postman Documentarion Labenu System](https://documenter.getpostman.com/view/14852823/TzY6AuVy)

Todos os endpoints da API REST, estão configurados no endereço `/api`, ha um catálogo simples de toda estrutura com rotas e opções da API neste endereço.

![Screenshot from 2021-06-02 17-27-23](https://user-images.githubusercontent.com/7757352/120547743-e999a180-c3c7-11eb-8137-782ee0678a3d.png)

# Principais entidades

As principais entidades e endpoints utilizados são os seguintes:

![Screenshot from 2021-06-02 18-23-24](https://user-images.githubusercontent.com/7757352/120554127-c07d0f00-c3cf-11eb-8fd6-f4bc5ece789a.png)

- /api/class
- /api/students
- /api/teachers
- /api/hobbies
- /api/skills

## Dependencias

- React
- Express 5
- Knex
- mysql

## Como rodar?

**Migrations**
Após copiar o repositório, faça a migração das tabelas, é importante ter os dados do banco no arquivo `.env`. na raís do projeto, ou então definir qualquer outro banco de dados no arquivo `knexfile`.

_Criando todos os banco de dados_

```
npx knex migration:latest
```

_Inserindo no banco as informações básicas_

```
npx knex seed:run
```

**Scripts**

Para rodar o projeto em desenvolvimento, utilize o comando dev:

```
npm run dev
```

Para rodar em produção, construa tudo com o comando build:

```
npm run build
```

## Arquitetura

O projeto foi feito com uma arquitetura simples, separando por controllers, models and services.

Foi aplicado o uso de OOP, com interfaces e classes abstradas modelos para organização do código.

![Screenshot from 2021-06-07 19-32-38](https://user-images.githubusercontent.com/7757352/121095826-6f05c300-c7c7-11eb-8267-97d146e214c5.png)

A Class Server para fazer setup de todas dependências de forma organizada, com decorator para implementação mais fácil das rotas por meio de metadados.

![Screenshot from 2021-06-07 19-33-10](https://user-images.githubusercontent.com/7757352/121095775-58f80280-c7c7-11eb-9dd5-241f4fb66654.png)

# Front end

Apesar de estar junto a aplicação, o front-end está desaclopado do sistema, sendo feito em React, consumindo a pŕopria API criada.

Por padrão o app em react está na pasta `public/app` da Raiz do projeto.

O front-end ainda está em desenvolvimento, para ter funcionando todas as páginas e gerenciamento.

![Screenshot from 2021-06-03 22-09-10](https://user-images.githubusercontent.com/7757352/120730683-6a37cb00-c4b8-11eb-959b-64232da24ec6.png)
