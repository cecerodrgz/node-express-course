const {writeFile} = require('fs')
console.log('at start')

writeFile('./temporary/fileB.txt', 'This is line 1\n', {flag: 'w'}, (err) => {
    console.log('at point 1')
    if(err){
        console.log('This error happened in line 1: ', err);
    }else{
        console.log('First line is written successfully')
   }
});


writeFile('./temporary/fileB.txt', 'This is line 2\n', {flag: 'a'}, (err) => {
    console.log('at point 2')
    if(err){
        console.log('This error happened in line 2: ', err);
    }else{
        console.log('Second line is written successfully')
    }
})

writeFile('./temporary/fileB.txt', 'This is line 3\n', {flag: 'a'}, (err) => {
    console.log('at point 3')
    if(err){
        console.log('This error happened in line 3: ', err)
    }else{
        console.log('Third line is written successfully')
    }
    console.log('This task is done')
})
