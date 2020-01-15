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

async function copyOps(source, destinationPath) {
    const data = await readFile(source);
    await writeFile(destinationPath, data);
    console.log('Copying success');

    return destinationPath; // resolves the promise with the data
    /* try {
        const data = await readFile(source);
        await writeFile(destinationPath, data);
        console.log('Copying success');
    } catch (err) {
        console.log(err);
    } */
}

// no matter calling async functions, but they internally return a promise
copyOps(source, destinationPath).then((dp) => {
    console.log(dp);

    const ans = fibo(30);
    console.log(ans);
}).catch((err) => {
    console.log(err);
});

