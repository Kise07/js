const fs = require("fs"); // fs-> file System Modules - help in CRUD operation of Files & Folders
const abc = require("../temp");

console.log(abc);


let res = fs.appendFileSync("f1.txt", "Hello! I'm fs file");
fs.appendFileSync("f1.txt", "\nYou guys are smart!");
console.log(res);

/* 1-way
let data = fs.readFileSync("f1.txt");
console.log(data + " "); // [BufferObject here! convert to string [+ " "]
*/

// 2-way
let data = fs.readFileSync("f1.txt", "utf-8"); // Automatic String Conversion here!
console.log(data);