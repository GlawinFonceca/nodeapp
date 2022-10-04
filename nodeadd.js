const yargs = require ('yargs');

const notes = require ('./node.js');


//add command
yargs.command({

    command : 'add',
    describe : 'adding note',
    builder : {
        title :{
             describe : 'add note',
             demandOption : true,
             type : 'string'
     
           },
           body:{
                describe : 'body',
                demandOption : true,
                type : 'string'
           }
    },
    handler(argv) {
        notes.getNote(argv.title,argv.body);
    }

})



//remove command
yargs.command({
    command : 'remove',
    describe : 'removing the note',
    builder : {
        title : {
            describe : 'remove note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command : "list",
    describe :'list of note',
    handler() {
        notes.listNote();

    }
}
)

//read note
yargs.command({
    command : 'read',
    describe : 'reading the note',
    builder : {
        title : {
            describe : 'read note',
            demandOption : true ,
            type : 'string'
        }
    },
    handler(argv){ 
        notes.readNote(argv.title,argv.body);
    }
})
yargs.parse()