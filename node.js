const { default: chalk } = require('chalk');
const fs = require('fs');
const { title } = require('process');



const getNote = (title,body) =>{
  const notes= loadNote();

  const duplicate = notes.filter((note) =>note.title === title);
  const duplicateNote = duplicate.find((note) => note.title === title);

  debugger
  if(!duplicateNote){
    notes.push({
        title: title,
        body : body

    })
    saveNote(notes);
    console.log(chalk.green.inverse('note added successfully'));
  }
  else {
    console.log(chalk.red.inverse('Note has taken'));
    }
  }


//fetch json file
const loadNote =() =>{
    try{
    const dataBuffer = fs.readFileSync('node.json');
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
}
catch (e){
    return []
}
}


const saveNote = (notes) => {
    const dataJSOn = JSON.stringify(notes);
    fs.writeFileSync('node.json',dataJSON)

}


//remove note
const removeNote =(title) =>{
    const notes =loadNote();
    const data = notes.filter((note) => { return note.title !== title});

    if(notes.length > data.length){
        console.log(chalk.green.inverse('note removed'))
        saveNote(data);
        }
        else {
            console.log(chalk.red.inverse('note not found'));
        }


}



//list note

const listNote =() => { 
    const notes = loadNote();
    console.log(chalk.green.inverse('your notes'))
    notes.forEach((note) => { return console.log(note.title, "",note.body)});

}


//read note
const readNote = (title,body) =>{
    const notes = loadNote(title,body);
    const data = notes.find ((note) => { return note.title === title});
    if(data !== undefined){
        console.log(chalk.green.inverse(data.title));
        console.log(data.body)
    }
    else{
        console.log (chalk.red.inverse('note not found'));
    }
    
}



module.exports = {
    
    getNote : getNote,
    removeNote :removeNote,
    listNote : listNote,
    readNote : readNote,
}