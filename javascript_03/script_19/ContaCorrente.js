export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; //#_atributo 
    
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
            // console.log(this.#saldo);
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log('Transferência efetuada com sucesso!');
    }
}