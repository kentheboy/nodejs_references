const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//           if (err) throw err;
//           console.log('Folder created...');
// });
// this mkdir contains callback function, which means this fs function is asyncronized
// Note: 'function(param){}' can be rewritten as '(err)=>{}' (arrow function), 
//        if only one param 'err => {}' as abbreviated format 

fs.writeFile(
          path.join(__dirname, '/test', 'hello.txt'),
          'Hello World!',
          err => {
                    if(err) 
                              throw err;
                    console.log('File written to...');       
          }
);

// File append
fs.appendFile(
          path.join(__dirname, '/test', 'hello.txt'),
          'I love NodeJS',
          err => {
                    if(err) 
                              throw err;
                    console.log('File written to...');       
          }
);

// Read file
fs.readFile(
          path.join(__dirname, '/test', 'hello.txt'),
          'utf8',
          (err, data) => {
                    if (err)
                              throw err;
                    console.log(data);
          }
);

// Rename file
fs.rename(
          path.join(__dirname, '/test', 'hello.txt'), 
          path.join(__dirname, '/test', 'hello2.txt'),
          err => {
                    if (err) throw err;
                    console.log('File renamed...');
          }
)