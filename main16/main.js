const fs = require("fs");

function checkDirectoryExists(path) {
  return fs.existsSync(path);
}

console.log(checkDirectoryExists("./notes.txt"));


//لو الملف مش موجود كان طبع false