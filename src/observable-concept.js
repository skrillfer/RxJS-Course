import {add} from './helpers';

function Observable(subscriber){
    subscriber.next('Hello Universe!');
}

const observer = {
    next: add.li,
    error: add.li,
    complete: ()=>{
        add.li('There are no more values');
    }
}

observer.next("Some Value");
observer.complete();