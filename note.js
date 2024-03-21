const fs = require('fs')
const message = function (notes){
    return 'Your notes is ' + notes + "!"
}


const addNotes = function (title, body){

}

const getNotes = function (title, body){

}
const removeNotes = function (title){
    const notes = loadNotes()
    const notesKeep =  notes.filter(function (note){
        return note.title !== title
    })

    saveNotes(notesKeep)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('playground/1-json.json', dataJSON)
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


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    remove: removeNotes
}