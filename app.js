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
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Note has been removed');
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function() {
        console.log('Reading available notes');
    }
});

// Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing available notes');
    }
});

yargs.parse();
