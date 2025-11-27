const fs = require("fs").promises;

async function writeAsyncFile(path, content) {
  try {
    await fs.writeFile(path, content);
    console.log("File written asynchronously!");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

writeAsyncFile("./async.txt", "Async save");