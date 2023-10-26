const {createReadStream} = require('fs');

const stream = createReadStream('../content/big.txt', {highWaterMark: 200, 
    encoding: 'utf8'});
let chunkCount = 0;

stream.on('data', (chunk) => {
    chunkCount++;
    console.log(`Received #${chunkCount} with ${chunk.length} bytes of data`)
})

stream.on('end', () => {
    console.log('There will be no more data.', chunkCount)
})

stream.on('error', (err) => console.log(err))