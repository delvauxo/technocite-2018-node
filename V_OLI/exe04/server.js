const http = require('http')

http.createServer((req, res) => {
    console.log('We have received a request !!!')
    fs.readFile('templates/index.html', 'utf-8', (err, data) => {
        if (err) throw err
        console.log(req.url) 
        if (req.url == '/about') {
            res.end(data + req.url)
        }
    })
}).listen(8000, () => {
    console.log('server is running and listening port 8000')
})
 