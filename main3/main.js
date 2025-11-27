const { log } = require("console");
const path=require("path");
function buildsapath(pathobj){
    return path.format(pathobj);
}
console.log(buildsapath({
    dir:"/folder",
    name:"app",
    ext:".js"
}));
