import {add} from './helpers';
import {Observable } from 'rxjs';
//Overview of Observables

//Create a Observable
const o = new Observable(
    (observer)=>{
        setTimeout(
            () => {
                observer.next('Observer');
            }, 1000
        );
    }
);
//Create a Promise
const p = new Promise(
    (resolve,reject)=>{
        setTimeout(
            () => {
                resolve('Promise');
            }, 1000
        );
    }
);

//Call Promise
p.then(
    message=>{
        add.li(message);
    }
);

//Call Observable
o.subscribe(
    (message)=>add.li(message)
);
