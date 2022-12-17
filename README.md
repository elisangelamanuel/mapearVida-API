#  Mapear Vida | Mapear é um ato político 📌🗺️✊🏽
Projeto de conclusão do Bootcamp de JavaScript Back-End da [{reprograma}](https://reprograma.com.br/)
<p align="center">

API disponível [aqui](https://mapearvida-api.onrender.com/) 🔗
<p>

## O desafio ⚙️

Desenvolver uma API que realize um CRUD: Create, Read, Update e Delete, esteja conectada ao banco de dados MongoDB Atlas, e que trate sobre um tema de impacto social.

## O cenário atual 🚨

Brasil tem 57 mil mortes por ano devido ao consumo de ultraprocessados, estima pesquisa. [Cultura alimentar, fonte: O joio e o trigo](https://ojoioeotrigo.com.br/2022/11/brasil-tem-57-mil-mortes-por-ano-devido-ao-consumo-de-ultraprocessados-estima-pesquisa/)
<h1 align="center">
  <img src="https://opara.nyc3.cdn.digitaloceanspaces.com/ojoio/uploads/2022/10/mortes-ups-2019-v1.png" alt="um infográfico que compara o total de mortes por alimentos super processados com mortes por homicídios, acidentes de trânsito, câncer de mama e próstata" width="500">
<p align="center">Número é maior do que o total de homicídios no país; se consumo brasileiro desses produtos chegar ao patamar dos Estados Unidos, serão quase 200 mil mortes prematuras anuais
<p>
</h1>

**O problema da insegurança alimentar denuncia a violência estrutural presente no dia a dia de muitos brasileiros.** 
As “violências estruturais” são formas abstratas de opressão baseada em instituições sociais, isto é, em estruturas sociais bem demarcadas como a família, a política, a economia, a cultura alimentar, etc. 
E por causa de algumas dessas “violências estruturais” não necessariamente virem acompanhadas de “agressões físicas”, acabam passando despercebidas as opressões e as barreiras que se erguem para tornar vulneráveis determinados grupos sociais ou mesmo impedir o pleno desenvolvimento humano e sustentável. 

## Objetivo do projeto 🎯
Nesse sentido, **a solução proposta é a criação de uma aplicação web que funcione como plataforma de visibilidade de pontos de segurança alimentar distribuídos no município**, ou seja, em formato de mapa colaborativo, tornando-se uma ferramenta de movimento social e preservação da paz e da saúde única (One Health: environment, plants, animals, human). 
Pois, mapear é um ato político e com o apoio visual e interativo é possível unir esforços em prol do desenvolvimento sustentável e pelo fim da violência estrutural silenciosa em vários aspectos e dizimadora de populações diversas no Brasil.

## Documentação da REST API
Swagger UI disponível [aqui](https://mapearvida-api.onrender.com/mapear-vida-api-documentation/) 🔗

<h1 align="center">
  <img src="https://uploaddeimagens.com.br/images/004/264/198/full/Swagger_UI_-_mapearvida-api.onrender.com.png?1671230939" alt="uma documentação das rotas implementadas na API mapearVida" width="500">
<p align="center">Mapear Vida - API
<p>
</h1>

### Funcionalidades:

- [x] No schema dos usuários constam os seguintes campos: id (autogerado), email, name, ambassador: {animals, environment, human, plants}, bio, password, timestamps (autogerado);
- [x] A API deve permitir o cadastro do usuário (embaixador da segurança alimentar nas esferas de One Health: animals, environment, human, plants);
- [x] Criação de token para login de usuário com acesso sem restrição;
- [x] A API deve permitir a visualização dos usuários cadastrados filtrados por nome com restrição de acesso;
- [x] A API deve permitir a visualização dos usuários cadastrados;
- [x] A API deve permitir a visualização dos usuários cadastrados filtrados pelo atributo animals;
- [x] A API deve permitir a visualização dos usuários cadastrados filtrados pelo atributo environment;
- [x] A API deve permitir a visualização dos usuários cadastrados filtrados pelo atributo human;
- [x] A API deve permitir a visualização dos usuários cadastrados filtrados pelo atributo plants;
- [x] A API deve permitir alterações no cadastro do usuário com restrição de acesso;
- [x] A API deve permitir a exclusão de cadastro de usuários do banco de dados com restrição de acesso;.
- [x] No schema dos mapas constam os seguintes campos: id (autogerado), pointName, cep, number, street, district, city, state, timestamps (autogerado);
- [x] A API deve permitir o cadastro do ponto de segurança alimentar no município;
- [x] A API deve permitir a visualização dos pontos de segurança alimentar cadastrados;
- [x] A API deve permitir alterações no cadastro do ponto de segurança alimentar com restrição de acesso;
- [x] A API deve permitir a exclusão de cadastro do ponto de segurança alimentar do banco de dados com restrição de acesso.

### Instalação 💻

```bash
# Clonar o repositório
$ git clone https://github.com/elisangelamanuel/mapearVida-API.git

# Entrar na pasta do repositório
$ cd mapearVida-API

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```
Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.


#### Tecnologias e pacotes utilizados 📦
- Node.js
- MongoDB Atlas
- Git
- Postman
- Render
- swagger-autogen
- swagger-ui-express
- express
- cors
- nodemon
- dotenv-safe
- mongoose
- bcrypt
- jsonwebtoken


### Implementações futuras 💡
* Testes
* Integração com APIs externas
* View 


### Contribua com o projeto!

1. Faça o fork do projeto;
2. Crie uma branch para realizar suas alterações: `git checkout -b feature/nome-da-nova-branch`
3. Commit as alterações feitas e abra um pull request


------------

### Conecte-se comigo 💌
- E-mail: deva.black.power@gmail.com
- LikedIn: [Elisângela Manuel](https://www.linkedin.com/in/elisangela-c/)
<h1 align="center">
  <img src="https://media.licdn.com/dms/image/C4E03AQHmsyHbEqQqkw/profile-displayphoto-shrink_200_200/0/1595125252402?e=1676505600&v=beta&t=cWolIAvRG2SzFsadusHB0tP_scLt6DNSvEwsSPZGNg4" alt="mulher negra, jovem, usando óculos redondos e vestindo camisa florida">
  <p align="center">Deva Back-End Elisângela Manuel
<p>
</h1>
               

<p align="center">
Desenvolvido com :purple_heart: 
</p>

