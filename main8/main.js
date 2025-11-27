const path=require("path");
function resolvesarelative(filepath){
    return path.resolve(filepath);
}
const input="./index.js";
const input2=resolvesarelative(input);
console.log(input2);
