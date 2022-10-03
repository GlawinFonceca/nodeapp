const validator = require('validator');

console.log(validator.isEmail('abc@gmail.com'));

console.log(validator.isURL('http://www.google.com'));


//print success in green color using chalk 
const chalk = require('chalk');


console.log(chalk.red.bold.inverse('success'));
