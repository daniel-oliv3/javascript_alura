import { Cliente } from "./Cliente.js"; //extensao js no final

export class ContaCorrente {
    static numeroDeContas = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1; // atributo statico
    }

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            console.log('Saque efetuado com sucesso!');
            return valor;
        }
    }

    depositar(valor){ //valor, parametro ou argumento
        if(valor > 0) {
            this._saldo += valor;
            console.log('Depósito efetuado com sucesso!');
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log('Transferência efetuada com sucesso!');
        valor = 20;
    }
}