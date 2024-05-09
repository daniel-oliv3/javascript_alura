/* Como funciona o var, let e const? #01 */

/* --- 1 - Exemplo ---*/
var idade = 30;
console.log('Idade do Sapup3 é: ', idade); 


/* --- 2 - Exemplo  ---*/
function imprimeIdade(){
    var idade = 30;
    console.log('Idade do Sapup3 é: ', idade); 
}

// imprimeIdade();

/* --- 3 - Exemplo  ---*/
function imprimeIdade(){
    var idade = 30;
    console.log('Idade do Sapup3 é: ', idade); 
}

console.log('Fora da function', idade); //erro a variavel não foi definida(escopo funcão)

imprimeIdade();




/* --- 4 - Exemplo  ---*/
function imprimeIdade(){
    for(var idade = 30; idade <= 100; idade++){
        console.log('Idade do Sapup3 é: ', idade); 
    }    
}

imprimeIdade();



/* --- 5 - Exemplo  ---*/
function imprimeIdade(){
    for(var idade = 30; idade <= 100; idade++){
        console.log('Idade do Sapup3 é: ', idade); 
    }    
}

console.log('Fora da for', idade); // não definida

imprimeIdade();


/* --- 6 - Exemplo  ---*/
function imprimeIdade(){
    for(var idade = 30; idade <= 100; idade++){
        console.log('Idade do Sapup3 é: ', idade); 
    }    
    console.log('Fora da for', idade); // imprime
}


imprimeIdade();



/* --- 7 - Exemplo  ---*/
function imprimeIdade(){
    for(var idade = 30; idade <= 100; idade++){
        console.log('Idade do Sapup3 é: ', idade); 
    }
    
    if(true){
        var nome = 'Daniel Victor';
    }
    console.log('Fora do if', nome);  
    console.log('Fora da for', idade); // imprime
}


imprimeIdade();


// variaveis var, problemas de escopo!


/* --- 8 - Exemplo  ---*/
function imprimeIdade(){
    for(let idade = 30; idade <= 100; idade++){
        console.log('Idade do Sapup3 é: ', idade); 
    }
    console.log('Fora da for', idade); // erro escopo
}


imprimeIdade();



/* --- 9 - Exemplo  ---*/
function imprimeIdade(){
    for(const idade = 30; idade <= 100; idade++){
        console.log('Idade do Sapup3 é: ', idade); 
    }
    console.log('Fora da for', idade); // erro: Assignment to constant variable 
}


imprimeIdade();



/* --- 10 - Exemplo  ---*/
const nome = 'Daniel Victor';
nome = 'Victor Daniel'; // erro: Assignment to constant variable 





/* --- 11 - Exemplo  ---*/
const pessoa = {
    nome: 'Daniel Oliveira',
    idade: 39
}

pessoa = {
    nome: 'Daniel Oliveira',
    idade: 40 // erro: Assignment to constant variable 
}



/* --- 12 - Exemplo  ---*/
const pessoa1 = {
    nome: 'Jack Shephard',
    idade: 42
}

nome.idade = 43;

console.log('Idade do Jack é: ', nome.idade); //funciona


//usar sempre const!

/**/
