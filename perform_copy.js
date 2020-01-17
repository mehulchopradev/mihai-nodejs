const { copy } = require('./copy');
const { fibo } = require('./series');

const copyObj = copy('notes', 'notes_copy');

// 'once' function to subscriber for only a single event of this name
copyObj.once('operationStart', () => {
    console.log('Operation starts...');
});

// 'on' funtion to subscribe for the multiple events of this name
copyObj.on('readSuccess', (data) => {
    console.log('Data read is : ');
    console.log(data.toString());
});

copyObj.on('readError', (err) => {
    console.log('Read error 1 : ');
    console.log(err);
});

copyObj.on('writeError', (err) => {
    console.log('Write error : ');
    console.log(err);
});

copyObj.on('copySuccess', (destination) => {
    console.log(`Copied to ${destination}`);
    //
});

console.log(fibo(30));