const path=require("path");
function wefilepath(filepath){
    return path.basename(filepath);
}
console.log(wefilepath("/user/files/report.pdf"));
