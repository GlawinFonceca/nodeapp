const fs = require('fs');

 fs.writeFileSync('notes.txt','this file is created using node.js')

//append message to file notes.txt

fs.appendFileSync('./notes.txt','\n hello world');

