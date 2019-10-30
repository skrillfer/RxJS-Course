import {add} from './helpers';


add.li('Line 4');

function callback(message){
    add.li(message);
}

function greeting(message,cb){
    let start = Date.now();
    for (let i = 0; i < 1000000000; i++) {
        //nothing
    }
    add.li(`took: ${Date.now() - start}ms`);
    cb(message)
}

greeting('Hello from Line 19',callback);

add.li('Line 21');


add.li('Line 24');
