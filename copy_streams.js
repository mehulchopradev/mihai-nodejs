const fs = require('fs');

const source = 'notes';
const destination = 'notes_copy';

const readEmitter = fs.createReadStream(source, {
    highWaterMark: 64,
});
const writeEmitter = fs.createWriteStream(destination);

/* readEmitter.on('data', (chunk) => {
    writeEmitter.write(chunk);
});

readEmitter.on('end', () => {
    writeEmitter.end();
});

writeEmitter.on('finish', () => {
    console.log('Copying done!');
}); */

readEmitter.pipe(writeEmitter);

// global objects
console.log(__dirname);
console.log(__filename);