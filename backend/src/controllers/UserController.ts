// importar a request e response do express.
import { Request, Response } from 'express'

// importe getRepository do typeorm 
import { getRepository } from 'typeorm';

// importar class User q tem o modelo de objeto para o repository poder trabalhar.
// local em models
import { User } from '../models/User';

// defino o codigo como class para poder trabalhar minhas açoes { }
class UserController {
    // async findAll mandado pelo router( request recebe Request importada express e response idem) {
    async findAll(request: Request, response: Response) {
        // const repository recebe getRepository do typeorm,  (User, da classe onde eu tenho o padrão de objeto)
        const repository = getRepository(User);
        // crio variavel para receber a lista = await funcao do repository de busca()
        const users = await repository.find();
        // retorno a response.stats(200).json(lista de usuarios)
        return response.status(200).json(users);
    }
    // async "funcao chamada pelo router" (request, response) {}
    async create(request: Request, response: Response) {
        // fragmento o nome e o email da minha request.body;
        const { name, email } = request.body;
        // crio variavel para receber a funcao de repository(User, minha class);
        const usersRepository = getRepository(User);
        // crio meu "user" = repository. create ({ nome, email}); objeto criado falta salvar.
        const user = usersRepository.create({
            name,
            email,
        });
        // await userRepository.save(user);
        await usersRepository.save(user);
        // retornar response ."stats ta faltando". e devolver o usuario
        return response.json(user);

    }
    // async "funcao mandada pelo router" (request e response)
    async delete(request: Request, response: Response) {
        // "instanciando" o repository(User);
        const repository = getRepository(User);
        // pegando o id do request.params.id => vindo pelo link
        const id = request.params.id;
        // await repository. "http metodo delete"(id)
        await repository.delete(id)
        // retornar stats e json vasio porque se trata de um delete.
        return response.status(204).json()

    }

    async findOne(request: Request, response: Response) {
        const repository = getRepository(User);

        const { id } = request.params

        const user = await repository.findOne(id);

        return response.status(200).json(user);
    }

    async edit(request: Request, response: Response) {
        const repository = getRepository(User);

        const id = request.params.id;
        const body = request.body;

        //buscar no banco esse cara q vc quer alterar
        const user = await repository.findOne(id)
        // vc vai alterar somente os campos que vc quer 
        user.name = body.name;
        user.email = body.email;
        //salvar o objeto alterado
        const userSaved = await repository.save(user)

        return response.status(200).json(userSaved)

    }



}

export { UserController }