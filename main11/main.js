const fs = require("fs");

function createFolderSync(folderPath) {
    try {
        fs.mkdirSync(folderPath);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}
createFolderSync("newFolder");