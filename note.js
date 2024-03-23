const fs = require('fs')
const chalk = require('chalk')
const message = function (notes){
    return 'Your notes is ' + notes + "!"
}


const addNotes = function (title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
}

const getNotes = function (title, body){

}
const removeNotes = function (title){
    const notes = loadNotes()
    const notesKeep =  notes.filter(function (note){
        return note.title !== title
    })
    if (notes.length > notesKeep.length) {
        console.log(chalk.green('removed succesfully!'))
    }else {
        console.log(chalk.red('404 not found!'))
    }
    saveNotes(notesKeep)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('playground/1-json.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('playground/1-json.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e) {
        return []

    }
}

const readNotes = (title) => {
    const notes = loadNotes()

    const findNote = notes.find((note) => {
        return note.title === title})
    if (findNote){
        console.log(findNote.body)
    }else {
        console.log('not found')
    }

}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    remove: removeNotes,
    readNotes: readNotes,
    listNotes: listNotes
}