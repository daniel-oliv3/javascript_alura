/**/
let listaDeItens = [];

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    salvarItem();
});

function salvarItem(){
    const comprasItem = itensInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());  //true ou false

    if(checarDuplicado){
        alert("Item ja existe");
    }else {
        listaDeItens.push( {
            valor: comprasItem
        });
    }

    console.log(listaDeItens);
}

/*

{} === {}
false

[] === []
false

*/