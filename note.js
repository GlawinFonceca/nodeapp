const fs = require ('fs');


const addNote =function(title,body){
    const notes = loadNote()
    
    const duplicateNote = notes.filter( function (note){
        return note.title ===title;
    })

    if(duplicateNote.length === 0) 
    {
    notes.push({
        title: title,
        body : body
    })
    saveNotes(notes);
    console.log('new note added');
}
else{
    console.log('note title taken');
}
}

 
const saveNotes =function (notes)
{
    const dataJSON =JSON.stringify(notes);//saves in json format
    fs.writeFileSync('notes.json',dataJSON);
}


const loadNote = function() {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();//converts to string
        return JSON.parse(dataJson);
    }
     catch(e){
        return[]
     }
}


module.exports = {
    addNote :addNote
}
