const fs = require('fs');

const path = 'notes';

const readStream = fs.createReadStream(path, {
    highWaterMark: 64,
});

readStream.on('open', () => {
    console.log('About to open up file');
});

readStream.on('data', (chunk) => {
    console.log('on chunk received');
    console.log(chunk.toString());
    console.log(typeof chunk);
});

readStream.on('close', () => {
    console.log('Closed the file');
});