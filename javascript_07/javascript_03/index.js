/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


// cliente 1
const cliente1 = new Cliente("Daniel Oliveira", 12345678910); 
const contaCorrenteDaniel = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


// Operações na conta
contaCorrenteDaniel.depositar(5030);
contaCorrenteDaniel.sacar(250);


// console log(terminal)
console.log("Saldo CC: ", + contaCorrenteDaniel.saldo);

console.log(contaCorrenteDaniel);
console.log(contaPoupanca);








// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */