import { handleStatus } from "../utils/promise-helpers.js";
import { partialize } from "../utils/operations.js";

const API = 'http://localhost:3000/notas';

const getItensFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItensByCode = (code, itens) => itens.filter(item => item.codigo == code);
const sumItensValue = itens => itens.reduce((total, item) => total + item.valor, 0);

export const notasService = {
    listAll(){
        return fetch(API).then(handleStatus);
    },

    sumItens(code){
        const filterItens = partialize(filterItensByCode, code);
        return this.listAll().then(sumItens(code));
    }
};


