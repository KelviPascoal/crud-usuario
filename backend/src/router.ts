////Em router irei configurar as rota de comunicação de entrada da API.

/// importar Router do express
import { Router } from 'express';

// User controller é a classe pré criada para tratar a request, tambem no momento
// estou usando ele para service e repository
import { UserController } from './controllers/UserController';

// atribuir a variavel router =  as funcoes do Router do express.
const router = Router();

// instanciar minha classe Usercontroller();
const userController = new UserController();

//metodo http possibilitada pelo router.(local, usercontroller. funcao criada no UserController())
router.post("/users", userController.create);

router.get("/users", userController.findAll);

router.delete("/users/:id", userController.delete);

router.get("/users/:id", userController.findOne);

router.put("/users/:id", userController.edit)

//exportar meu router para minhas chamadas http poderem chegar ao controller.
export { router };