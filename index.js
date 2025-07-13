const fs =require("fs");
fs.writeFile("message.txt1","Hello from node js !",function(err){
    if(err) throw err;
    console.log("File has saved ...");
})