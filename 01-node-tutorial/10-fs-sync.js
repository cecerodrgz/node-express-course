const { readFileSync, writeFileSync, appendFile } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const third = readFileSync('./content/second.txt', 'utf8') 

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}, ${third}`,
  { flag: 'a' }
)

console.log('done with this task')
console.log('starting the next one')