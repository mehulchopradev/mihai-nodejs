const fs = require('fs').promises;
const { EventEmitter } = require('events');

exports.copy = function (source, destination) {
    // publisher - subscriber pattern
    const eventEmitter = new EventEmitter()

    fs.readFile(source)
        .then((data) => {
            eventEmitter.emit('readSuccess', data);

            eventEmitter.emit('operationStart');
            eventEmitter.emit('operationStart');

            return fs.writeFile(destination, data)
        }, (err) => {
            // error happened during reading
            eventEmitter.emit('readError', err);
        })
        .then(() => {
            // copy was success
            eventEmitter.emit('copySuccess', destination);
        }, (err) => {
            eventEmitter.emit('writeError', err);
        });
    return eventEmitter;
};