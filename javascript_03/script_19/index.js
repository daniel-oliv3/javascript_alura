/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


// cliente 1
const cliente1 = new Cliente(); //instanciando a classe Cliente
cliente1.nome =  "Daniel Oliveira";
cliente1.cpf =  "12345678910";

const contaCorrenteDaniel = new ContaCorrente();

contaCorrenteDaniel._saldo = 500;
contaCorrenteDaniel.agencia = 1001;
contaCorrenteDaniel.cliente = cliente1;




// cliente 2
const cliente2 = new Cliente();
cliente2.nome =  "Priscila Andrade";
cliente2.cpf =  "78910123456";

const contaCorrentePriscila = new ContaCorrente();

contaCorrentePriscila._saldo = 1000; 
contaCorrentePriscila.agencia = 3502;
contaCorrentePriscila.cliente = cliente2;



// Operações entre contas
contaCorrenteDaniel.depositar(30);
contaCorrenteDaniel.depositar(100);
const valorSacado = contaCorrenteDaniel.sacar(50);
contaCorrenteDaniel.transferir(5000, contaCorrentePriscila);


contaCorrentePriscila.depositar(1350);
contaCorrentePriscila.sacar(100);






// --- Console.log ---

console.log(contaCorrenteDaniel);
// console.log(contaCorrenteDaniel._saldo);
// console.log(valorSacado);

console.log(contaCorrentePriscila);










// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js

//package.json -> npm init

/* --- */