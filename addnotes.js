const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');



//adding notes
const getnote =(title) => {
      const notes =loadnote()
      const duplicate = notes.filter((note) => note.title === title);
        if(duplicate.length ===0){
      notes.push({
        title : title
      })
      savenote(notes);
      console.log(chalk.green('note added'));
}
else {
    console.log('note has taken');
}
}




//fetching notes in json file
const loadnote = () =>{
try{

    const dataBuffer = fs.readFileSync('note1.js');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
}

catch (e){
    return [];
}
}



//saving notes in Json format
const savenote = (notes) => {
    const data =JSON.stringify(notes);
    fs.writeFileSync('note1.js',data);

}




//removing the note
const removenote = (title) => {
    const notes = loadnote(title)   
    // const noteToKeep = notes.filter(function (note){
    //     return notes.title !== title
    const noteToKeep = notes.filter((note) => {return note.title !== title});
    

    if(notes.length > noteToKeep.length){ 
    console.log(chalk.green.inverse("Note removed"))
    savenote(noteToKeep);

}
else{
    console.log(chalk.red.inverse('Note not found'));
}
}





//listing the note
const listNotes = () => {
    const notes =loadnote();
    console.log(chalk.green.inverse('Your nodes'));
    
     notes.forEach((note) => {return  console.log(note.title)})
}




//read note 
const readNote= (title) => {
    const notes =loadnote();
     const data =notes.find((note) => { return note.title === title})

     if(data){
        console.log(chalk.green.inverse(data.title))

     }
     else{
        console.log(chalk.red.inverse('note not found'));
     }
    
}


//export statement
module.exports = {
    getnote:getnote,
    removenote:removenote,
    listNotes : listNotes,
    readNote : readNote
};