const { title } = require('process');
const { demandOption } = require('yargs');



const yargs = require('yargs');
const notes = require('./addnotes.js');

//add command
yargs.command({
    command : 'add',
    describe : 'adding a note',
    builder :{
        title:{
            describe : 'note title',
            demandOption : true,
            type : 'string'
        }

    },
    handler : function(argv){
       notes.getnote(argv.title);
    }
})


//remove command
yargs.command({
    command : 'remove',
    describe : 'removing the note',
    builder:{
            title:{
                describe :" note title",
                demandOption: true,
                type :"string"
            }
    },
    handler : function(argv){
        notes.removenote(argv.title);
       
    }
})


//list note command
yargs.command ({
    command : 'list',
    describe : 'list of note',
    handler() {
        notes.listNotes();
        
    }
})



//read command
yargs.command({
    command :'read',
    describe : 'reading the note',
    builder : {
        title: {
            describe :" read notes",
            demandOption : true,
            type : 'string'

        }
    },
    handler (agrv){
        notes.readNote(agrv.title);

    }
})
yargs.parse();
