/* --- JS --- */

class Cliente {
    nome; //atributo
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente(); //instanciando a classe Cliente
const cliente2 = new Cliente(); 

cliente1.nome =  "Daniel Oliveira";
cliente1.cpf =  "12345678910";
cliente1.agencia =  1001;
cliente1.saldo =  0;
cliente1.rg =  "123456789";

cliente2.nome =  "Priscila Andrade";
cliente2.cpf =  "78910123456";
cliente2.agencia =  1002;
cliente2.saldo =  0;
cliente2.rg =  "567891234";


// ---
console.log(cliente1);
console.log(cliente2);




// -- executar no PowerShell/GitBash --
// c:/caminho_projeto> node ./index.js

// node ./index.js


/* --- */