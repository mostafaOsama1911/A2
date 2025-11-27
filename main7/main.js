const path=require("path");
function multiplesegments(...filepath){
    return path.join(...filepath);
}
console.log(multiplesegments("src", "components", "App.js"));
