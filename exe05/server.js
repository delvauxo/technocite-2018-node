const fs = require('fs')

// let allData = ''

// fs.readFile(`${process.cwd()}/data/file.txt`, (err, data) => {
//     allData += data
//     fs.readFile(`${process.cwd()}/data/file2.txt`, (err, data) => {
//         allData += data
//         console.log(allData)
//     })
// })

const readFile = (file) => {
    
    return filePromise = new Promise((resolve, reject) => {

        fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })

    })

}

// readFile(`${process.cwd()}/data/file.txt`)
//     .then(data => {
//         console.log(data)
//         readFile(`${process.cwd()}/data/file2.txt`)
//             .then(data => {
//                 console.log(data)
//             }).catch(err => {
//                 console.log(err)
//             })
//     })

Promise.all([readFile(`${process.cwd()}/data/file.txt`), readFile(`${process.cwd()}/data/file2.txt`)])
    .then(results => {
        console.log(results[1])
    }).catch(err => {
        console.log(err)
    })
