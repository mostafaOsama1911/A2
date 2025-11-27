const fs = require("fs");

function deleteFileAsync(path) {
  fs.unlink(path, (err) => {
    if (err) {
      console.log("Error:", err.message);
      return;
    }

    const fileName = path.split("/").pop();
    console.log(`The ${fileName} is deleted.`);
  });
}

deleteFileAsync("/Assignment2/main10/path/file.txt");