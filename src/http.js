import {add} from './helpers';
import {resolve} from 'path';

add.li('Line 4');

async function runPromise(){
    add.li('Line 7');
    const p = new Promise(
        (resolve,reject)=>{
            setTimeout(
                () => {
                    resolve('We are complete!');
                }, 5000
            );
        }
    );
    const message = await p;
    add.li(message);
    add.li('Line 18');
}

runPromise();

add.li('Line 24');

/*
await solo funciona dentro de la funcion async,
si se desea esperar la ejecucion de runPromise() basta con
runPromise(p=>add.li('Line 24'));
 */