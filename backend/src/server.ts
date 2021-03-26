// meu banco de dados
import "./database";
// express onde eu tiro router, request, response...
import express from "express";
// reflect-metadata é pra converter a leitura do Node.js para entender o typescript
import "reflect-metadata";
// importar meu router criado atribuindo um import do express
import { router } from "./router";
// "compartilhamento de recursos com origens diferente" é uma segurança de para controlar
// as requisiçoes recebendo apenas do porta definida, e qual requsiçao fazer posso definir.
import cors from "cors";

// atribuir as funcoes express() para o const app.
const app = express();

// rodando o cors e configurando a porta de entrada
app.use(cors({
    origin: 'http://localhost:4200'

}));
// basicamente isso: express().use(express.json()) => para fazer o server ler json.
app.use(express.json());
// usar router.
app.use(router);

// funcao de ficar em espera "server on"(local, console mensagem opicional)
app.listen(5555, () => console.log("Server is running!"));
