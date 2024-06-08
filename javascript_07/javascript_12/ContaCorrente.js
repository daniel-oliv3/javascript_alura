import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    teste(){
        super.teste();
        console.log("Teste na classe conta corrente");
    }

    /* Sobreescrevendo o comportamento de sacar */
    sacar(valor){
        let taxa = 1.1;
        // return super._sacar();  /*mesma coisa que a linha de baixo*/      
        return this._sacar(valor, taxa);
    }
}