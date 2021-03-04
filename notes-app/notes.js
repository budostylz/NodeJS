const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'These are my notes.';
}

const addNote = function (title, body) {
    const noteTaken = chalk.red.bold.inverse;
    const noteAdded = chalk.green.bold.inverse;
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(noteAdded('New note added!'));

    } else {
        console.log(noteTaken('Note title taken!'));
    }




}

const removeNote = function (title) {
    const noNoteFound = chalk.red.bold.inverse;
    const noteRemoved = chalk.green.bold.inverse;
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    })

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(noteRemoved('Note Removed'));
    } else {
        console.log(noNoteFound('No Note Found'));
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};

