const path=require("path");
function fileextension(filepath){
    return path.extname(filepath);
}
console.log(fileextension("/docs/readme.md"));
