import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(){
        super(nome, salario, cpf)
        this._bonificacao = 1.1;
    }
}