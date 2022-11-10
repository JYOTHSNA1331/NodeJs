const http = require('http')
const server = http.createServer((req,res)=>{
    res.write('<h1>Hello World</h1>')
    res.write(data)
})

const data = {
    fname:'John',
    lname:'Smith'
}

server.listen(process.env.PORT || 8080)

server.on('connection',(socket)=>{
    console.log('server connected')
})
