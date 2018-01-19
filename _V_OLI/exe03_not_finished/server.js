// const http = require('http')
// const fs = require('fs')
// http.get('http://www.pass.be', resPass => {
//     bodyPass = ''
//     resPass.setEncoding('utf-8')
//     resPass.on('data', donnee => {
//         // console.log(data)
//         bodyPass += donnee
//     })
//     resPass.on('end', () => {
//         console.log('end')
//         fs.writeFile('index.html', body, (err) => {
//             if (err) console.log(err)
//             console.log('file generated')
//         })
//     })

// })
// http.get('http://www.mons.be', resMons => {
//     resMons.setEncoding('utf-8')
//     resMons.on('data', donneeMons => {
//         bodyPass += donneeMons
//     })
// })