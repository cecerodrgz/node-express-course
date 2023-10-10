const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to the home page')
    } else if(req.url === '/about') {
        res.end('Here is the about page')
    } else{
        res.end(`
        <h1> Oops! </h1>
        <p> It looks like what you were looking for doesn't exist </p>
        <a href='/'> Back home </a> 
        `)
    }
})

server.listen(3000)