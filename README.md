# Exercise Tracker

# Projeto: API de Registro de Exercícios Físicos

Este projeto é uma API para o registro de exercícios físicos construída com Node.js, Express.js e MongoDB. Ela permite aos usuários criar contas, registrar exercícios e visualizar os logs de exercícios realizados.

![193002](https://github.com/victorbrigido/boilerplate-project-exercisetracker/assets/110338761/323aff6e-4c70-4c77-b2ae-c2f37739a58b)


## Funcionalidades Principais

- **Registro de Usuários:** Permite aos usuários criar uma conta, fornecendo um nome de usuário único.
- **Registro de Exercícios:** Permite aos usuários registrar detalhes sobre os exercícios realizados, incluindo descrição, duração e data.
- **Visualização de Logs:** Oferece uma rota para visualizar os registros de exercícios de um usuário, filtrando por data ou limitando a quantidade de registros exibidos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM para MongoDB)
- Cors

## Instruções de Uso

1. Clone este repositório em seu ambiente local.
2. Execute `npm install` para instalar as dependências necessárias.
3. Configure as variáveis de ambiente no arquivo `.env` (incluindo a URL do banco de dados MongoDB).
4. Inicie o servidor com o comando `node server.js` ou `npm start`.
5. Acesse a API através de requisições HTTP a partir de um cliente ou aplicativo.

### Endpoints Disponíveis

- `POST /api/users`: Cria um novo usuário.
- `GET /api/users`: Retorna a lista de usuários registrados.
- `POST /api/users/:_id/exercises`: Registra um novo exercício para o usuário.
- `GET /api/users/:_id/logs`: Retorna o histórico de exercícios de um usuário.

### Observações Adicionais

- O projeto utiliza o CORS para permitir requisições de diferentes origens.
- Arquivos estáticos podem ser servidos a partir da rota `/public`.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](./LICENSE) para detalhes.



# Project: Exercise Tracker API

This project is an API for tracking physical exercises built with Node.js, Express.js, and MongoDB. It allows users to create accounts, log exercises, and view exercise logs.

## Key Features

- **User Registration:** Allows users to create an account by providing a unique username.
- **Exercise Logging:** Enables users to log details about exercises, including description, duration, and date.
- **Viewing Logs:** Provides an endpoint to view exercise logs, optionally filtered by date or limited in quantity.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)
- Cors

## Usage Instructions

1. Clone this repository to your local environment.
2. Run `npm install` to install the necessary dependencies.
3. Configure the environment variables in the `.env` file (including the MongoDB database URL).
4. Start the server with the command `node server.js` or `npm start`.
5. Access the API through HTTP requests from a client or application.

### Available Endpoints

- `POST /api/users`: Creates a new user.
- `GET /api/users`: Returns the list of registered users.
- `POST /api/users/:_id/exercises`: Records a new exercise for the user.
- `GET /api/users/:_id/logs`: Returns the exercise history for a user.

### Additional Notes

- The project uses CORS to allow requests from different origins.
- Static files can be served from the `/public` route.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

