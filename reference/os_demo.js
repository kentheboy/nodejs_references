const os = require('os');

// Platform
console.log(os.platform()); //os you are running on
// result: win32

// CPU Architecture
console.log(os.arch());
// result: x64

// CPU Core Info
console.log(os.cpus());
console.log(os.cpus().length);
// this returns the cpu cores' info in object format

// Free memory
console.log(os.freemem())

// Total memory
console.log(os.totalmem())

// Home dir
console.log(os.homedir())

// Uptime
console.log(os.uptime())
var uptime = os.uptime()
console.log(uptime/(3600*24)); // display uptime by date (default: sec)