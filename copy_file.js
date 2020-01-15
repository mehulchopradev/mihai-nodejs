const fs = require('fs');

const source = '/Users/mehulc/Documents/library.jpg';
const destinationPath = '/Users/mehulc/Desktop/library_copy.jpg';

// non blocking IO
fs.readFile(source, (err, data) => {
    // data is going to be a Buffer since we kept the encoding as default (which is null)
    if (err) {
        // send this to some logging system
        console.log(err);
        return;
    }

    // console.log(data);

    // non blocking IO
    fs.writeFile(destinationPath, data, {
        encoding: null
    }, (err) => {
        if (err) {
            // send to some logging
            console.log(err);
            return;
        }
    });
});
