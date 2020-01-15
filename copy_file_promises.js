const fs = require('fs');
const { fibo } = require('./series');

const source = '/Users/mehulc/Documents/library.jpg';
const destinationPath = '/Users/mehulc/Desktop/library_copy.jpg';

function readFile(source) {
    // asynchronous code to read from the file (non blocking IO)
    return new Promise((resolve, reject) => {
        fs.readFile(source, (err, data) => {
            // data is going to be a Buffer since we kept the encoding as default (which is null)
            if (err) {
                // send this to some logging system
                console.log(err);
                reject(err);
                return;
            }

            resolve(data);
        });
    });
}

function writeFile(destinationPath, data) {
    // asynchronous code to write to the file (non blocking IO)
    return new Promise((resolve, reject) => {
        fs.writeFile(destinationPath, data, {
            encoding: null
        }, (err) => {
            if (err) {
                // send to some logging
                console.log(err);
                reject(err);
                return;
            }

            resolve();
        });
    });
}

// caller
readFile(source).then((data) => {
    // will be called when the promise resolves
    // console.log(data);

    return writeFile(destinationPath, data);
}).then(() => {
    console.log('Copying success');
}).catch((err) => {
    // will be called when the promise rejects
    console.log('Error copying the file');
    console.log(err);
});

const ans = fibo(30);
console.log(ans);

