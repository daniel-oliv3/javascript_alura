export class Cliente {
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
        // this.autenticar = 1;
    }

    autenticar(){
        return true;
    }

}