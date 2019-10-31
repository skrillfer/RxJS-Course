import {add} from './helpers';
import {Observable} from 'rxjs';
// function Observable(subscriber){
//     subscriber.next('Hello Universe!');
// }

const observer = {
    next: add.li,
    error: add.li,
    complete: ()=>{
        add.li('There are no more values');
    }
}

//observer.next("Some Value");
//observer.complete();
//Observable(observer);

// class Observable{
//     constructor(subscribTo){
//         this.subscribTo = subscribTo;
//     }
//     subscribe(observer){
//         return this.subscribTo(observer);
//     }
// }

const Producer = new Observable(
    (subscribe)=>{
        subscribe.next("Hello from the Observable class");
        subscribe.complete();
        subscribe.next('Something I forgot');
    }
);

Producer.subscribe(observer);