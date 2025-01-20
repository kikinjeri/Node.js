const os = require('os');
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);


var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var userInfo =os.userInfo();

console.log('User Info: ' + userInfo);
console.log(`User Info: ${userInfo}`);
console.log('Total Memory: ' + totalMemory);
 console.log(`Total Memory: ${totalMemory}`);
console.log('Free Memory: ' + freeMemory);
 console.log(`Free Memory: ${freeMemory}`);

//Template string

