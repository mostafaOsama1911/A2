const path=require("path");
function givenpath(filepath){
    const parsed=path.parse(filepath);
    return {Name:parsed.name , Ext:parsed.ext};
}
console.log(givenpath("/home/app/main.js"));
