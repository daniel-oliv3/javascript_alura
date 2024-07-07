import { handleStatus } from "../utils/promise-helpers.js";

const API = 'http://localhost:3000/notas';

const sumItens = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);

export const notasService = {
    listAll(){
        return fetch(API).then(handleStatus);
    },

    sumItens(code){
        return this.listAll().then(sumItens(code));
    }
};


