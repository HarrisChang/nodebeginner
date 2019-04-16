const path = require('path');

var _basename = path.basename('C:\\temp\\myfile.html');
var _basename2 = path.win32.basename('C:\\temp\\myfile.html');
var _basename3 = path.posix.basename('C:\\temp\\myfile.html');

console.log('_basename', _basename);
console.log('_basename2', _basename2);
console.log('_basename3', _basename3);