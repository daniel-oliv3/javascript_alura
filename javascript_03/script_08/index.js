/* --- JS --- */

class Cliente {
    nome; //atributo
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
    
    sacar(valor){
        if(this.saldo >= valorSacado) {
            this.saldo -= valorSacado;
            console.log('Saque efetuado com sucesso!');
        }
    }
}

let valorSacado = 200;
// if(contaCorrenteDaniel.saldo >= valorSacado) {
//     contaCorrenteDaniel.saldo -= valorSacado;
//     console.log('Saque efetuado com sucesso!');
// }


const cliente1 = new Cliente(); //instanciando a classe Cliente
cliente1.nome =  "Daniel Oliveira";
cliente1.cpf =  "12345678910";


const cliente2 = new Cliente();
cliente2.nome =  "Priscila Andrade";
cliente2.cpf =  "78910123456";

const contaCorrenteDaniel = new ContaCorrente();
const contaCorrentePriscila = new ContaCorrente();  

contaCorrenteDaniel.saldo = 800;
contaCorrenteDaniel.agencia = 1001;

contaCorrentePriscila.saldo = 1350;
contaCorrentePriscila.agencia = 3502;



// ---
console.log(cliente1);
console.log(cliente2);

console.log(contaCorrenteDaniel);
console.log(contaCorrentePriscila);


console.log('Saldo: ' + contaCorrenteDaniel.saldo);
console.log('Saldo: ' + contaCorrentePriscila.saldo);


console.log('Agência: ' + contaCorrenteDaniel.agencia);
console.log('Agência: ' + contaCorrentePriscila.agencia);


// contaCorrenteDaniel.saldo -= valorSacado;

console.log('Valor Sacado: ' + contaCorrenteDaniel.saldo);
contaCorrenteDaniel.sacar(50);
console.log('Saldo: ' + contaCorrenteDaniel.saldo);






// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */