export class Conta {
    constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial; //_privado
        this._cliente = cliente;
        this.agencia = agencia;
    }

    //Metodos
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