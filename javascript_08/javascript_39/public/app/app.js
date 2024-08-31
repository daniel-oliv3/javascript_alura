// APP
import { log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { debounceTime, takeUntil } from "./utils/operations.js";

// const showMessage = () => console.log('Opa!');
// const operation2 = debounceTime(500, showMessage);
// operation2();
// operation2();
// operation2();

const action = debounceTime(500, 
    takeUntil(3, () =>
        service
        .sumItens('2143')
        .then(console.log)
        .catch(console.log)
    )
);

// const operation2 = debounceTime(500, operation1);


document
.querySelector('#myButton')
.onclick = action;













