const fsPromises = require('fs').promises;

const source = '/Users/mehulc/Documents/library.jpg';
const destinationPath = '/Users/mehulc/Desktop/library_copy.jpg';

/* fsPromises.readFile(source)
    .then((data) => {
        return fsPromises.writeFile(destinationPath, data);
    })
    .then(() => {
        console.log('Copying success');
    })
    .catch((err) => {
        console.log(err);
    }); */

async function copy() {
    const data = await fsPromises.readFile(source);
    await fsPromises.writeFile(destinationPath, data);
    console.log('Copying success');
}

copy().catch((err) => {
    console.log(err);
});