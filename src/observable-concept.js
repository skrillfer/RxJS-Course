import {add} from './helpers';
import {Observable, observable } from 'rxjs';
//Overview of Observables

//Create a Observable
const o = new Observable(
    (observer)=>{
        setTimeout(
            () => {
                observer.next('Observer1');
                observer.next('Observer2');
                observer.next('Observer3');
                observer.next('Observer4');
                observer.next('Observer5');
                observer.complete();
                observer.next('este se me olvido');
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
o.subscribe(
    {
        next: (message)=>{
            add.li(message);
        },
        error: (error)=> console.error(error),
        complete: ()=> add.li('This observable is complete!!')
    }
);
