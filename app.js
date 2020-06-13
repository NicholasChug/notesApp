const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize Yargs Version
yargs.version('1.1.0');

// Add, Remove, Read, List Notes
// Create Add Command
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
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNotes(argv.title);
    }
});

// Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler () {
        notes.listNotes()
    }
});

yargs.parse();
