export class SistemaAutenticacao {
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }
}