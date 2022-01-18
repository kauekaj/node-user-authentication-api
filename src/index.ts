import express from "express";
import bearerAuthenticationMiddleware from "./middlewares/bearer-authentication.middleware";
import errorHandler from "./middlewares/error-handler.middleware";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import userRoute from "./routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(statusRoute);
app.use(bearerAuthenticationMiddleware, userRoute);
app.use(authorizationRoute);

// Configuração dos Handlers de erro
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
