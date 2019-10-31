import {add} from './helpers';
import {Observable, observable } from 'rxjs';
//Overview of Observables

//Create a Observable
const o = new Observable(
    (observer)=>{
        setInterval(
            () => {
                observer.next('Observable every second');
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

//Call Observable  subscribe(next,error,complete)
const subscription = o.subscribe(
    {
        next: (message)=>{
            add.li(message);
        },
        error: (error)=> console.error(error),
        complete: ()=> add.li('This observable is complete!!')
    }
);

setTimeout(
    ()=>{
        subscription.unsubscribe();
    },4000
);
