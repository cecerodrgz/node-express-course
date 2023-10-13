const fs = require('fs').promises;

async function writer() {
    try{
        const data = `Line 1\nLine 2\nLine 3`;
        await fs.writeFile ('../answers/temporary/tempt.txt', data);
        console.log('File tempt.txt has been written succesfully.')

    } catch(error){
        console.log('Error with file:', error)
    }
}

writer()
.then(() => {
    console.log('File writing process completed.')
})
.catch((error) => {
    console.log('Error:', error)
})