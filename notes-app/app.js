const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// Customize yars version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Read the note');
    }
})


//Create list command
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler: function () {
        console.log('List the note');
    }
})


yargs.parse();

//console.log(yargs.argv);

