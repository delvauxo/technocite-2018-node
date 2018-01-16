const [action, value] = [process.argv[2], process.argv[3]]
const possibleActions = ['add', 'remove']
const fileMger = require('./tpk/fileManager')
const checkActions = (action) => {
    return possibleActions.filter(item => item === action).length > 0
}
const checkValue = (value) => (value) ? true : false

const init = () => {
    if (!checkActions(action)) {
        console.log(`Error : the possible actions are : ${'\n\n'}-add ${'\n'}-remove${'\n'}`)
    } else if (!checkValue(value)) {
        console.log('Error : You need to give value for insertion !!!')
    } else {
        fileMger.init('liste.txt', action, value)
    }
}

init()


