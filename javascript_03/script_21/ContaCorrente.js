export class ContaCorrente {
    agencia;
    cliente;

    _saldo = 0; //#_atributo privado
    
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