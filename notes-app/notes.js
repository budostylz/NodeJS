const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const noteTaken = chalk.red.bold.inverse;
    const noteAdded = chalk.green.bold.inverse;
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);


    if (!duplicateNote) {
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

const removeNote = (title) => {
    const noNoteFound = chalk.red.bold.inverse;
    const noteRemoved = chalk.green.bold.inverse;
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);


    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(noteRemoved('Note Removed'));
    } else {
        console.log(noNoteFound('No Note Found'));
    }

}

const readNote = (title) => {
    const style = chalk.blue.bold.inverse;
    const notFound = chalk.red.bold.inverse;
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title);

    if (findNote) {
        const noteTitle = findNote.title;
        console.log(style(noteTitle));
        console.log(findNote.body);
    } else {
        console.log(notFound('Note Not Found'));
    }



    /*if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(noteAdded('New note added!'));

    } else {
        console.log(noteTaken('Note title taken!'));
    }*/




}


const listNotes = () => {
    const headerStyle = chalk.blue.bold.inverse;
    const notes = loadNotes();
    console.log(headerStyle('Your Notes'));

    notes.forEach((note) => {
        console.log(note)
    })

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

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
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
};

