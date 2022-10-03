const yargs = require('yargs');
const fs = require ('fs');
const notes = require ('./note.js');

// console.log(process.argv);
// yargs.version('1.1.0')

//create add command

yargs.command({
    command:'add',
    describe: 'adding a new note',
    builder :{
        title:{
            describe: 'note title',
            demandOption: true,
            type :'string'
        },
        body:{
            describe: "body name",
            demandOption:true,
            type: 'string'
        }

    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    //     handler: function(argv){
    //         console.log('title',+argv.title);
    //         console.log('body',+argv.body);
     }
})

// //create remove command

// yargs.command({
//     command : 'remove',
//     describe : 'removing a note',
//     handler :function(){
//         console.log('removing the note');
//     }
// })

// //create list command

// yargs.command({
//     command : 'list',
//     describe : 'list your  note',
//     handler :function(){
//         console.log('listing out all notes');
//     }
// })

// //create read command

// yargs.command({
//     command : 'read',
//     describe : 'reading a note',
//     handler :function(){
//         console.log('reading the note');
//     }
// })
yargs.parse();

