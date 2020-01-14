const fs = require('fs'); // fs is the name of the module (not the path)
const { fibo } = require('./series');

const path = '/Users/mehulc/Desktop/mihai-nodejs/objects.js';

let i = 0;

function processClientRequest () {
    i ++;
    console.log(`Client${i} is about to read from the file`);

    // blocking IO
    /* const data = fs.readFileSync(path, {
        encoding: 'utf-8'
    });
    console.log(data); */

    // non blocking IO

    // lower level threads would start the IO reading operation
    // libuv
    fs.readFile(path, {
        encoding: 'utf-8'
    }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });


    // compute the fibo series
    // non IO (CPU)
    console.log(fibo(20));

    console.log(`Client${i} request is processed`);
}

function processAnotherTypeOfRequest() {
    // non IO (CPU)
    i ++;
    console.log(`Client${i} is about compute fibo series`);
    // compute the fibo series
    console.log(fibo(30));
    console.log(`Client${i} request is processed`);
}

// setTimeout(readFile, 3000); // min 3 secs
setTimeout(processClientRequest, 0);
setTimeout(processClientRequest, 0);
setTimeout(processClientRequest, 0);
setTimeout(processClientRequest, 0);
setTimeout(processClientRequest, 0);
setTimeout(processClientRequest, 0);
setTimeout(processClientRequest, 0);
setTimeout(processAnotherTypeOfRequest, 0);