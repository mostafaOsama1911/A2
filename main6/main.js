
const path=require("path");
function checkswhether(filepath){
    return path.isAbsolute(filepath);
}
console.log(checkswhether("/home/user/file.txt"));

