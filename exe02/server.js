// si CLI : node server.js remove truc
console.log(process.argv[3]) // return truc
console.log(process.argv[2]) // return remove

const fs = require('fs')

fs.readFile(`${process.cwd()}/liste.txt`, 'utf8',(err, data) => {
    if (err) throw err
    // console.log(data)
})

