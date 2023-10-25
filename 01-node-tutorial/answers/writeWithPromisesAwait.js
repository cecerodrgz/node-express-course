const fs = require('fs').promises;

async function writeDataToFile() {
    try {
        await fs.writeFile("temp.txt", "Line 1");
        await fs.writeFile("temp.txt", "Line 2\n", { flag: "a" });
        const test = await fs.writeFile("temp.txt", "Line 3", { flag: "a" });
        return test;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
}

writeDataToFile()
    .then((result) => {
        console.log('File writing process completed.');
        console.log('Result:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
