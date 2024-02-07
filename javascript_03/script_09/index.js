/* --- JS --- */

class Cliente {
    nome; //atributo
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo; //#atributo privado
    
    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            console.log('Saque efetuado com sucesso!');
        }
    }

    depositar(valor){ //valor, parametro ou argumento
        if(valor > 0) {
            this._saldo += valor;
            console.log('Depósito efetuado com sucesso!');
            // console.log(this.#saldo);
        }
    }
}

// let valorSacado = 30;

// cliente 1
const cliente1 = new Cliente(); //instanciando a classe Cliente
cliente1.nome =  "Daniel Oliveira";
cliente1.cpf =  "12345678910";

const contaCorrenteDaniel = new ContaCorrente();

contaCorrenteDaniel._saldo = 500;
contaCorrenteDaniel.agencia = 1001;

contaCorrenteDaniel.depositar(100);
contaCorrenteDaniel.depositar(100);
contaCorrenteDaniel.depositar(30);
contaCorrenteDaniel.depositar(100);

contaCorrenteDaniel.sacar(73);







// cliente 2
const cliente2 = new Cliente();
cliente2.nome =  "Priscila Andrade";
cliente2.cpf =  "78910123456";

const contaCorrentePriscila = new ContaCorrente();

contaCorrentePriscila.saldo = 0; 
contaCorrentePriscila.agencia = 3502;


// contaCorrentePriscila.depositar(1350);



// ---

console.log(contaCorrenteDaniel);
console.log(contaCorrenteDaniel._saldo);












// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */

//Site: https://github.com/tc39/proposal-class-fields