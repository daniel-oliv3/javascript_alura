/* --- JS --- */
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

// --- cliente 1 ---
const cliente1 = new Cliente("Daniel Oliveira", 12345678910);

const contaCorrenteDaniel = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);


// --- Operações na conta ---
contaCorrenteDaniel.depositar(5030);
contaCorrenteDaniel.sacar(250);


// --- console log(terminal) ---
console.log(contaCorrenteDaniel);
console.log(contaPoupanca);





// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */