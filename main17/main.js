const os = require("os");

function getSystemInfo() {
  return {
    Platform: os.platform(),
    Arch: os.arch()
  };
}

console.log(getSystemInfo());