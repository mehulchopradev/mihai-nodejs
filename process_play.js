console.log(process.pid);
console.log(process.version);
console.log(process.env);
console.log(process.platform);

console.log(process.argv); // command line arguments

process.on('beforeExit', () => {
    console.log('Before exit');
});

process.on('exit', () => {
    console.log('On exit');
});

setTimeout(() => {
    console.log('hello');
}, 5000);