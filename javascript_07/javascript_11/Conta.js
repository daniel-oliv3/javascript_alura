export class Conta {
    constructor (saldoInicial, cliente, agencia){
        this._saldo = saldoInicial; //_privado
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // Get e Set
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

    //Metodos
    sacar(valor){
        let taxa = 1;
        
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log('Saque efetuado com sucesso!');
            return valorSacado;
        }
    }

    depositar(valor){ 
        this._saldo += valor;
        console.log('Depósito efetuado com sucesso!');
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log('Transferência efetuada com sucesso!');
    }

    teste(){
        console.log("Teste na classe conta");
    }
}