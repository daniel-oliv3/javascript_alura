export class Funcionario  {
    constructor(nome, salario, cpf){
        this._nome;
        this._salario;
        this._cpf;

        this._bonificacao = 1;
        this._senha;
    }

    get senha(){
        return this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha; 
    }
}