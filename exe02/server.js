// // si CLI : node server.js remove truc
// console.log(process.argv[2]) // return remove
// console.log(process.argv[3]) // return truc

// const fs = require('fs')

// fs.readFile(`${process.cwd()}/liste.txt`, 'utf8',(err, data) => {
//     if (err) throw err
//     // console.log(data)
// })

const [action, value] = [process.argv[2], process.argv[3]]
const possibleActions = ['add', 'remove']
const checkActions = (action) => {
    return possibleActions.filter(item => item === action).length > 0
}
const checkValue = (value) => (value) ? true : false

const init = () => {
    if (!checkActions(action)) {
        console.log(`Error : the possible actions are : ${'\n\n'}-add ${'\n'}-remove${'\n'}`)
    } else if (!checkValue(value)) {
        console.log(`Error : You need to give value for insertion !!!`)
    } else {
        const fs = require('fs')

        fs.readFile('liste.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
          }, fs.writeFile('liste.txt', [action + '\n' + value], (err) => {
                if (err) throw err;
                console.log(`The file has been write and saved your data : -${action + ' and ' + value}`);
            })
        )
    }
}

init()

