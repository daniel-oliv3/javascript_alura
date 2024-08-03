// APP
import { log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { takeUntil } from "./utils/operations.js";

// const showMessage = () => console.log('oi');
// const operation = takeUntil(3, showMessage);

// let counter = 10;
// while(counter--) operation();

const operation = takeUntil(3, () =>
    service
    .sumItens('2143')
    .then(console.log)
    .catch(console.log)
);

document
.querySelector('#myButton')
//.onclick = () => operation();
.onclick = operation;













