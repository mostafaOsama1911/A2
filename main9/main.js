const path=require("path");
function joinpath(path1, path2){
    return path.join(path1, path2);
}
console.log(joinpath("/folder1", "folder2/file.txt"));
