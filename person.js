// Module Wrapper Function (a function that wrap around the functions and objects in module)
// (function(exports, require, module, __filename, __dirname){

// }) 
// console.log(__dirname, __filename);
// "__dirname" and "__filename" can be used to get current file location info
// result(cmd) : $ node person
// C:\Users\kensl\OneDrive\Desktop\nodejs_tutorial C:\Users\kensl\OneDrive\Desktop\nodejs_tutorial\person.js


const person = {
          name: 'John',
          age: 30
}
//Object to be exported

// module.exports = person;
//export person object

class PersonInfo {
          constructor(name, age){
                    this.name = name;
                    this.age = age;
          }

          greeting(){
                    console.log(`My name is ${this.name} and I am ${this.age}`)
          }
}

// module.exports = {person:person, PersonInfo:PersonInfo};
module.exports = PersonInfo;
//export person object