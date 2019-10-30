import {add} from './helpers';
import {resolve} from 'path';

add.li('Line 4');

const p = new Promise(
    (resolve,reject)=>{
        setTimeout(
            () => {
                resolve('We are complete!');
            }, 5000
        );
    }
);

p.then(
    message=>add.li(message)
);
add.li('Line 19');


add.li('Line 22');
