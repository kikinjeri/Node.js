console.log(__filename);
// path to file

console.log(__dirname);
//path

var url = 'http://mylogger.io/log';

function log(message) {
    // send an HTTP request
    console.log(message);
}
module.exports = log;



// exports = log; will not work