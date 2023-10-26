const fs = require('fs').promises;

const data = `This is a test for .then`;

fs.writeFile('../answers/temporary/tempt.txt', data)
.then(() => {
    console.log('This step was successfull');
})
.catch((err) => {
    console.log('There has been an error.', err)
})
.then(() => {
    console.log('This is the end of the test')
})
.catch((err) => {
    console.log('Error:', err)
})
