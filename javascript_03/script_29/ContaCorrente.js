import { Cliente } from "./Cliente.js"; //extensao js no final

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0; //#_atributo privado

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

    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
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
        conta.cidade = "Manaus"; //adicinando dinamicamente, JS
        valor = 20;
    }
}