const fs = require("fs");

function readFileSyncAndLog(filePath) {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        console.log(`the file content => "${data}"`);
    } catch (err) {
        console.error(err);
    }
}
console.log(readFileSyncAndLog("./notes.txt"));