const { dirname } = require('path');
const path = require('path');

// Base file name 
console.log(__filename) //display entire path to the file

console.log(path.basename(__filename)) //get only file name from __filename

// Directory name
console.log(path.dirname(__filename)) //get only dir from __filename

// File extension
console.log(path.extname(__filename)); //get only file extension

// Create path object
console.log(path.parse(__filename)); 

// Concatenate path
console.log(path.join(__dirname, 'test\/sdfghj,', 'hello.txt'));