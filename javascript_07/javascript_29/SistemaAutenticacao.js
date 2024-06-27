export class SistemaAutenticacao {
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}






/* Ser autenticavel significar ter o metodo autenticar */